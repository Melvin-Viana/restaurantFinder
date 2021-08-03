var jwt = require('jsonwebtoken');
var JWT_SECRET = process.env.JWT_SECRET;
// @ts-ignore: Userdata = User Mongoose model
module.exports = function (userdata) {
    // https://github.com/bradtraversy/nodeauthapp/issues/3
    // Turn user model into plain JSON object and create JWT token
    return jwt.sign(userdata.toJSON(), JWT_SECRET, { expiresIn: '1800s' });
};
