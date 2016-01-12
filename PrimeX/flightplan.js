var plan = require('flightplan');

var appName = 'richardcfelix'; // ###### change
var username = 'deploy';       // ###### change
var startFile = 'app.js';      // ###### change

var tmpDir = appName+'-' + new Date().getTime();

// configuration
plan.target('staging', [
  {
    host: '45.55.142.182', // ######### change to staging ip when u get one
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);

plan.target('production', [
  {
    host: '45.55.142.182', // ######## change
    username: username,
    privateKey: '/Users/richardfelix/.ssh/id_rsa', // ######## change password: '<pass>',
    agent: process.env.SSH_AUTH_SOCK
  },
//add in another server if you have more than one
// {
//   host: '104.131.93.216',
//   username: username,
//   agent: process.env.SSH_AUTH_SOCK
// }
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('gulp build');

  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Move folder to root');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.sudo('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});

  remote.log('Reload application');
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});
  remote.exec('sudo restart node-app');
});  

//184.168.221.1