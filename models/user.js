const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Here .default is necessary 
const passportLocalMongoose = require("passport-local-mongoose").default;

// in userSchema not need to add username and password becoz
// Passport-Local Mongoose will add a username, hash and salt
// field to store the username, the hashed password and the salt value.
// Additionally, Passport-Local Mongoose adds some methods to your Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);