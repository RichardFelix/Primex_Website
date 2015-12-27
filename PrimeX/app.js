var express = require('express'),
    app = express(),
    compression = require('compression'),
    config = require('./config/config.js'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    localMongoose = require('passport-local-mongoose'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    sendgrid  = require('sendgrid')(config.sendgridUser, config.sendgridPwd),
    User = require('./models/user');

// gzip enabled for faster loading
app.use(compression());

mongoose.connect('mongodb://localhost/primex');

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

//submit form function
app.post('/form', function(req, res){
        
    sendgrid.send({
      to:       'info@primexprime.com',
      from:     'info@primexprime.com',
      name:     req.body.contact_name,
      subject:  'Primex Contact Form',
      html:     '<h1>PrimeX Website Contact Form</h1>  <b>NAME:</b> ' + req.body.contact_name + '<br/><br/><b>EMAIL:</b> ' +req.body.contact_email + '<br/><br/> <b>PHONE:</b> ' + req.body.contact_phoneno + ' <br/><br/> <b>MESSAGE:</b> ' + req.body.contact_message 
            
    }, function(err, json) {
            
      if (err) { 
          return console.error(err); 
      }else{ 
          console.log('Success'); 
          res.redirect('/thank-you.html'); 
      }
     }
    ); 
});

//register
app.post('/register', function(req, res){
    User.register(new User({username: req.body.email}), 'primex123',  function(err, user){ // creates a new user and hashes password
        if(err)
            return res.redirect('/login');
        
        passport.authenticate('local')(req, res, function(){ // using local strat and hash password
            console.log('shit worked');
//            sendgrid.send({
//              to:       req.body.email,
//              from:     'info@primexprime.com',
//              name:     req.body.email,
//              subject:  'Primex Temporary Password',
//              html:     '<b>Primex Temporary Password</b>: primex123'
//
//            }, function(err, json) {
//              if (err)
//                  return console.error(err);    
//            });
            
        });        
    });
});

//login
app.post('/login', passport.authenticate('local', { // this middleware is checking if the login in a sucess or not using the local strategy
    successRedirect: '/success',
    failureRedirect: '/login'
}), function(req, res){
});

app.get('/login', function(req, res){
    res.redirect('/broker-login.html');
});

app.get('/success', isLoggedIn, function(req, res){ // using my custom middleware to tell if the req is authenticated if so keep going if not redirect to home
    res.redirect('/broker-success.html');
});

function isLoggedIn(req, res, next){ // custom middle ware that check it a user is already logged in or not
    if(req.isAuthenticated())
        return next(); // allows route to go to the next function in its list
    else
        res.redirect('/login');
}

//logout
app.get('/logout', function(req, res){
    req.logout(); // how to destroy session
    res.redirect('/');
});

// set the home page route
app.get("/", function (req, res) {
    res.redirect("index3.html");
});

// redirect if error 404 or any other 
app.use(function(req, res){
  res.redirect("index3.html");
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});