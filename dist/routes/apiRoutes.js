var createUser = require('../controllers/createUser');
var findUser = require('../controllers/findUser');
var addRestaurant = require('../controllers/addRestaurant');
var loginForm = require('../controllers/loginForm');
var verifyToken = require('../middleware/tokenMiddleware').verifyToken;
// @ts-ignore: Ignore User type; it's a mongoose User Model
module.exports = function (express, User) {
    var router = express.Router();
    router.get('/hey', function (req, res) {
        res.send('hey');
    });
    router.post('/login', function (req, res) {
        loginForm(req, res, findUser, User);
    });
    router.post('/signup', function (req, res) {
        loginForm(req, res, createUser, User);
    });
    router.post('/addRestaurant', function (req, res) {
        addRestaurant(req, res, req.body, User, verifyToken);
    });
    router.get('/verifyToken', function (req, res) {
        var verifiedToken = verifyToken(req, res, req.body.token);
        findUser(verifiedToken.username);
        res.send({ msg: 'User is verified' });
    });
    // Can only access other API routes only if cookie exists
    return router;
};
