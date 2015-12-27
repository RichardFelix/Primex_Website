var mongoose = require('mongoose'),
    localMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(localMongoose);  // gives our Schema the functions from passport-local-mongoose

module.exports = mongoose.model('User', UserSchema);