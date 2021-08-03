// @ts-nocheck
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    restaurants: []
});
UserSchema.pre('save', function (next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password'))
        return next();
    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err)
            return next(err);
        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
};
module.exports = mongoose.model('User', UserSchema);
