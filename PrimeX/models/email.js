var mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('../config/config');

mongoose.connect(config.mongoLocation_dev); // mongoLocation_dev for development && mongoLocation_production for production

var emailSchema = mongoose.Schema({
    email: String
});

var Email = mongoose.model('Email', emailSchema);

var findOne = function(req, res){               
        Email.find( {email: req.body.email}, function(err,user){ 
                if(err)
                    throw err;
                else
                    if(user.length == 0){
                        console.log( 'Your email not in system contact system administrator' );
                        res.render('broker-request-login');
                    }else
                        res.render( 'changePassword', { email: req.body.email } );
            });
};

var newEmail = function(req,res){    
    var Advisor = Email({
        email: req.body.email,
    });

    Advisor.save(function(err){
        if(err)
            console.log('cant save advisor to Email collection ' + err);
        else
            res.send('saved email');
    }); 
};

module.exports = {
    findOne,
    newEmail,
    mongoose,
    Email
}