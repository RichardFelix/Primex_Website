//////////////////////////////////////////////////////////////////////
//--------------------------Includes--------------------------------\\
//////////////////////////////////////////////////////////////////////
var express = require('express'),
    app = express(),
    config = require('./config/config.js'),
    session = require('express-session'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    localMongoose = require('passport-local-mongoose'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    sendgrid  = require('sendgrid')(config.sendgridUser, config.sendgridPwd),
    User = require('./models/user'),
    mongoose = require('mongoose');

//////////////////////////////////////////////////////////////////////
//----------------------App Settings--------------------------------\\
//////////////////////////////////////////////////////////////////////
// mongoose location
mongoose.connect(config.mongoLocation_production); // change to mongoLocation_production for production || mongoLocation_dev for dev

// template setting
app.set('view engine', 'ejs');

// gzip enabled for faster loading ( use nginx for this for prouduction )
app.use(compression());

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// Express Session Settings
app.use(session({ // this is a way of requiring a module and passing functions to app
        secret: 'this can be anything',   // all these options are needed for express-session to work
        resave: false,
        saveUninitialized: false
}));

// Passport Settings
app.use(passport.initialize());    // needed to use passport
app.use(passport.session());       // needed to use passport
app.use(bodyParser.urlencoded({extended: true})); // needed for body parser to work
passport.use(new localStrategy({
    usernameField: 'email'}, User.authenticate())); // creating a new local startegy coming from the passport-local-mongoose we exported functions
passport.serializeUser(User.serializeUser());   // passport uses this to encode the session info
passport.deserializeUser(User.deserializeUser());  // passport uses this to decode the session info

/////////////////////////////////////////////////////////////
//----------------------Login------------------------------\\
/////////////////////////////////////////////////////////////
app.post('/login', passport.authenticate('local', { // this middleware is checking if the login in a sucess or not using the local strategy
    successRedirect: '/success',
    failureRedirect: '/login-badInfo'
}), function(req, res){
});

app.get('/success', isLoggedIn, function(req, res){ // using my custom middleware to tell if the req is authenticated if so keep going if not redirect to home
    res.render('broker-success');
});

// custom middle ware that check it a user is already logged in or not
function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
        return next(); // allows route to go to the next function in its list
    else
        res.redirect('/login');
}

////////////////////////////////////////////////////////////////////////////////
//----------------------Request Access / Sign up------------------------------\\
////////////////////////////////////////////////////////////////////////////////
app.post('/request', function(req, res){
    var email = req.body.email.toLowerCase();
    User.find({ username: email }, function(err, user) { console.log(user);
        if (err)
            throw err;

        if(user.length == 0){
            sendgrid.send({
                to:       config.emailLocation,
                from:     'info@primexprime.com',
                name:     req.body.name,
                subject:  'Primex Login Request',
                html:     `<h2><b>Primex Login Request</b></h2> <br/><br/> <b>Name:      </b> ${req.body.name} <br /> <b>Email:      </b>${req.body.email} <br />`

                }, function(err, json) {
                     if (err)
                       return console.error(err);
                      else{
                          console.log('Success');
                          res.render('thank-you');
                      }
            })
        }else{
            console.log('In DB!');
            sendgrid.send({
                to:       req.body.email,
                from:     'info@primexprime.com',
                name:     req.body.email,
                subject:  'Primex Login Instructions',
                html:     `<h2><b>Primex Login Instructions</b></h2> <br/><br/> Use the link below to and enter your temporary access code. <br/><br/><b>Access Code:      </b>${user[0].accessCode} <br/><br/><b>Link:</b> <a href='https://primexprime.com/changePassword'>http://primexprime.com/f8sfd3s3stttd973432dsakol3309kdllo932</a>`  //////////////----------------------Change to production

                }, function(err, json) {
                     if (err)
                       return console.error(err);
                      else{
                          console.log('Success');
                          res.render('request-success');
                      }
            });
        }
    })
});

////////////////////////////////////////////////////////////////////////
//----------------------Change Passsword------------------------------\\
////////////////////////////////////////////////////////////////////////
app.post('/changePassword', existsNdelete, function(req, res){  // take out middleware to input to Emails in db for development
        req.body.email = req.body.email.toLowerCase();
        User.register(new User({username: req.body.email, accessCode: Math.floor((Math.random() * 100000) + 1000) }), req.body.password,  function(err, user){ // creates a new user and salt/hash password
        if(err)
            return res.render('broker-login', {email: email, alert: ''});

        passport.authenticate('local')(req, res, function(){ // using local strat and hash password
            res.render('broker-success');
        })
    })
});

// custom middle ware to find if a user is exists if so delete it so it can be reregistered And if info is incorrect
function existsNdelete(req, res, next){
    var email = req.body.email.toLowerCase();
    User.find({ accessCode: req.body.accessCode }, function(err, user) {
      if (err)
          throw err;

        if(user.length == 0){
            res.redirect('/changePassword-BadInfo');
        }else{
           User.find({ username: email }, function(err, user2) {
                if(err)
                    throw err;

                if(email != user[0].username){
                    res.redirect('/changePassword-BadInfo');
                }else{
                  User.remove({ username: user2[0].username }, function(err) {
                        if (err)
                            throw err;
                    })

                  console.log('User successfully deleted!');
                  return next();
                }
           })
        }

    })
};

////////////////////////////////////////////////////////////////////////
//----------------------Forget Passsword------------------------------\\
////////////////////////////////////////////////////////////////////////
app.post('/recovery', function(req, res){
    var email = req.body.email.toLowerCase();
    User.find( { username: email }, function(err, user) {
        if (err)
            throw err;

        if(user.length == 0)
            res.render('password-recovery', {alert: 'Incorrect Email'})
        else{
            console.log('In DB!');
            sendgrid.send({
                to:       req.body.email,
                from:     'info@primexprime.com',
                name:     req.body.email,
                subject:  'Primex Password Reset',
                html:     `<h2><b>Primex Password Reset</b></h2> <br/><br/> Use the link below and enter your email and access code to change password. <br/><br/><b>Access Code:      </b>${user[0].accessCode} <br/><br/><b>Link:</b> <a href='https://primexprime.com/changePassword'>http://primexprime.com/f8sfd3s3stttd973432dsakol3309kdllo932</a>` //////////////----------------------Change to production

                }, function(err, json) {
                     if (err)
                       return console.error(err);
                      else{
                          console.log('Success');
                          res.render('request-success');//, { email: req.body.email, alert: 'Check Your Email for Access Code' });
                      }
            });
        }
    })
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//--------------------------------Routes ( non passport related / User Model realated )-------------------\\
////////////////////////////////////////////////////////////////////////////////////////////////////////////
require('./routes')(app, config, sendgrid);

/////////////////////////////////////////////////////////////////////////
//--------------------------------App port listening-------------------\\
/////////////////////////////////////////////////////////////////////////
app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
