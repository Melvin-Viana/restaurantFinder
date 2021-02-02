module.exports = (express)=>{
    const router = express.Router();
    router.get('/hey', (req,res)=> {
        res.send('hey')
    });
    return router;
};