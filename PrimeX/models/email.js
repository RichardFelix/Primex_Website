var mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('../config/config');

mongoose.connect(config.mongoLocation_dev); // mongoLocation_dev for development && mongoLocation_production for production

var emailSchema = mongoose.Schema({
    name: String,
    email: String,
});

var Email = mongoose.model('Email', emailSchema);

var findOne = function(req, res){               
        Email.find( {email: req.body.email}, function(err,user){ 
                if(err)
                    throw err;
                else
                    if(user.length == 0){
                        console.log( 'Your email not in system contact system administrator' );
                        res.render('broker-request-login', { email: req.body.email, alert: '' } );
                    }else
                        res.render( 'broker-login', { alert: 'Email is Already Registered', email: req.body.email } );
            });
};

//var newEmail = function(req,res){    
//    var Advisor = Email({
//        name: req.body.name,
//        email: req.body.email
//    });
//
//    Advisor.save(function(err){
//        if(err)
//            console.log('cant save advisor to Email collection ' + err);
//        else
//            res.send('saved email');
//    }); 
//};

module.exports = {
    findOne,
//    newEmail,
    mongoose
}