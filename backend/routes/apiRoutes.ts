const createUser = require('../controllers/createUser');
const findUser = require('../controllers/findUser');
const addRestaurant = require('../controllers/addRestaurant');
const loginForm = require('../controllers/loginForm');
const {verifyToken} = require('../middleware/tokenMiddleware');
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

     router.post('/addRestaurant', (req:any, res: any) => {
       addRestaurant(req, res, req.body, User, verifyToken);
      });

     router.get('/verifyToken', (req:any, res:any)=>{
       const verifiedToken = verifyToken(req, res, req.body.token)
       findUser(verifiedToken.username);
       res.send({msg:'User is verified'});
    })

    // Can only access other API routes only if cookie exists
    return router;
};