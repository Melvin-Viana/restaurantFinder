const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;
// @ts-ignore: Userdata = User Mongoose model
module.exports = {
    // https://github.com/bradtraversy/nodeauthapp/issues/3
    // Turn user model into plain JSON object and create JWT token
    generateToken:(userData) => jwt.sign(userData.toJSON(), JWT_SECRET, {expiresIn: '7200s'}),
    verifyToken: (req, res, token) => {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.exp * 10000 < Date.now()) {
            console.log(decoded.exp, decoded.exp * 10000 < Date.now())
            throw 'Token is expired';        
        }
        return decoded;
    }
};
