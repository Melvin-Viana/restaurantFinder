const createUser = require('../controllers/createUser');
const findUser = require('../controllers/findUser');
const loginForm = require('../controllers/loginForm');
// @ts-ignore: Ignore User type; it's a mongoose User Model
module.exports = (express: any, User) => {
    const router = express.Router();
    router.get('/hey', (req:any, res:any)=> {
        res.send('hey')
    });

    router.post('/login',  (req: any, res: any ) => {
      loginForm(req, res, findUser, User);
    });

    router.post('/signup',  (req: any, res: any ) => {
       loginForm(req,res, createUser, User)
     });



    // Can only access other API routes only if cookie exists
    return router;
};