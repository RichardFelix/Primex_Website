var express = require('express'),
    app = express(),
    compression = require('compression'),
    config = require('./config/config.js'),
    session = require('express-session'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    localMongoose = require('passport-local-mongoose'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    sendgrid  = require('sendgrid')(config.sendgridUser, config.sendgridPwd),
    User = require('./models/user'),
    Email = require('./models/email');;

app.set('view engine', 'ejs');

// gzip enabled for faster loading
app.use(compression());

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));


app.use(session({ // this is a way of requiring a module and passing functions to app 
        secret: 'this can be anything',   // all these options are needed for express-session to work
        resave: false,
        saveUninitialized: false
}));
app.use(passport.initialize());    // needed to use passport
app.use(passport.session());       // needed to use passport
app.use(bodyParser.urlencoded({extended: true})); // needed for body parser to work
passport.use(new localStrategy({
    usernameField: 'email'}, User.authenticate())); // creating a new local startegy coming from the passport-local-mongoose we exported functions
passport.serializeUser(User.serializeUser());   // passport uses this to encode the session info
passport.deserializeUser(User.deserializeUser());  // passport uses this to decode the session info

//Change Passsword
app.post('/changePassword', function(req, res){
        User.register(new User({username: req.body.email}), req.body.password,  function(err, user){ // creates a new user and salt/hash password
        console.log(err);
        if(err)
            return res.render('broker-login', {exists: 1, email: req.body.email });
        
        passport.authenticate('local')(req, res, function(){ // using local strat and hash password
            res.render('broker-success');
        })       
    })
});

//register
app.post('/register', Email.findOne);

//login
app.post('/login', passport.authenticate('local', { // this middleware is checking if the login in a sucess or not using the local strategy
    successRedirect: '/success',
    failureRedirect: '/login'
}), function(req, res){
});

app.get('/success', isLoggedIn, function(req, res){ // using my custom middleware to tell if the req is authenticated if so keep going if not redirect to home
    res.render('broker-success');
});

function isLoggedIn(req, res, next){ // custom middle ware that check it a user is already logged in or not
    if(req.isAuthenticated())
        return next(); // allows route to go to the next function in its list
    else
        res.redirect('/login');
}

//Routes ( non passport related )
require('./routes')(app, config, sendgrid);

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});