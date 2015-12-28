module.exports = function(app, config, sendgrid){
    
    app.get('/login', function(req, res){
        res.render('broker-login', { email: '' });
    });
    
    app.get("/", function (req, res) {
        res.render('index');
    });

    app.get('/services', function(req, res){
        res.render('services');
    });

    app.get('/advisory', function(req, res){
        res.render('advisory');
    });

    app.get('/login-main', function(req, res){
        res.render('login')
    });

    app.get('/about', function(req, res){
        res.render('about-firm')
    });

    app.get('/privacy', function(req, res){
        res.render('privacy')
    });

    app.get('/business', function(req, res){
        res.render('business')
    });

    app.get('/risks', function(req, res){
        res.render('risks')
    });

    app.get('/register', function(req, res){
        res.render('broker-register');
    });
    
    app.get('/changePassword',function(req, res){
        res.render('changePassword', { email: '' })
    });
    
    app.get('/logout', function(req, res){
        req.logout(); // how to destroy session
        res.render('broker-login', { email: '' });
    });
    
    app.get('/recovery', function(req, res){
        res.render('password-recovery');
    });    
    
    // Contact form 
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
              res.render('thank-you'); 
          }
         }
        ); 
    });
    
    // Request Access Form
    app.post('/request', function(req, res){

        sendgrid.send({
            to:       config.emailLocation,
            from:     'info@primexprime.com',
            name:     req.body.id,
            subject:  'Primex Login Request',
            html:     `<h2><b>Primex Login Request</b> <br /><br /> <b>Name:      </b> ${req.body.name} <br /> <b>Email:      </b>${req.body.email} <br /> <b>Brokers ID     :</b>${req.body.id} <br /></h2>`

            }, function(err, json) {
                 if (err)
                   return console.error(err);    
                  else{ 
                      console.log('Success'); 
                      res.render('thank-you'); 
                  }
            })
    });

    // redirect if error 404 or any other 
    app.use(function(req, res){
      res.redirect("/");
    });
}