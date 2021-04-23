const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../../config');

module.exports = (userdata) => {
    // https://github.com/bradtraversy/nodeauthapp/issues/3
    // Turn user model into plain JSON object and create JWT token
    return jwt.sign(userdata.toJSON(), JWT_SECRET, {expiresIn: '1800s'});
};
