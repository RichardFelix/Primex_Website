module.exports = function(app, config, sendgrid){
 
    //////////////////////////////////////////////////////////////////////
    //-----------------------Main Routes--------------------------------\\
    //////////////////////////////////////////////////////////////////////
    app.get("/", function (req, res) {
        res.render('index');
    });

    app.get('/services', function(req, res){
        res.render('services');
    });

    app.get('/advisory', function(req, res){
        res.render('advisory');
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
    
    //////////////////////////////////////////////////////////////////////
    //----------------------Login Routes--------------------------------\\
    //////////////////////////////////////////////////////////////////////
    app.get('/login-main', function(req, res){
        res.render('login')
    });   
    app.get('/login', function(req, res){
        res.render('broker-login', { email: '', alert: '' });
    });
    
    app.get('/login-badInfo', function(req, res){
        res.render('broker-login', { email: '', alert: 'Incorrect Information' });
    });
    app.get('/register', function(req, res){
        res.render('broker-register', {alert: ''});
    });
    
    app.get('/changePassword',function(req, res){
        res.render('changePassword', { email: '', alert: ''})
    });
    
    app.get('/changePassword-BadInfo',function(req, res){ 
        res.render('changePassword', { email: req.body.email , alert: 'Information is Incorrect'})
    });
    
    app.get('/recovery', function(req, res){
        res.render('password-recovery', {alert: ''});
    });
 
    app.get('/logout', function(req, res){
        req.logout(); // how to destroy session
        res.render('broker-login', { email: '', alert: '' });
    });    

    //////////////////////////////////////////////////////////////////////
    //----------------------404 Redirect--------------------------------\\
    //////////////////////////////////////////////////////////////////////
    app.use(function(req, res){
      res.redirect("/");
    });
}