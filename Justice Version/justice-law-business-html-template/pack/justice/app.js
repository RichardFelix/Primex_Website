var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    sendgrid  = require('sendgrid')('rfelix', 'richiesd22');

app.use(bodyParser.urlencoded({ extended: true })); 

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

    //submit form function
    app.post('/form', function(req, res){
        
        sendgrid.send({
          to:       'rfelixmail@gmail.com',
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

    // set the home page route
    app.get("/", function (req, res) {
      res.redirect("/index3.html");
    });

    // redirect if error 404 or any other 
    app.use(function(req, res){
      res.redirect("/index3.html");
    });

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});