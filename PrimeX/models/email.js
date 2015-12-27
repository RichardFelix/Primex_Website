var mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    User = require('./user'),
    config = require('../config/config');

mongoose.connect(config.mongoLocation);

var emailSchema = mongoose.Schema({
    email: String
});

var Email = mongoose.model('Email', emailSchema);

var findOne = function(req, res){               
        Email.find( {email: req.body.email}, function(err,user){ 
                if(err)
                    throw err;
                else
                    if(user.length == 0)
                        res.send( 'Your email not in system contact system administrator' );
                    else
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
    mongoose
}