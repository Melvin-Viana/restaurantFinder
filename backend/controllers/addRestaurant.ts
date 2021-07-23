module.exports = async (req,res, jsonBody, userSchema, verifyToken) => {
    // Cookies
    const {token, restaurant} = jsonBody;
    const decoded = verifyToken(req,res, token);
    const update = {
        $addToSet: {restaurants: restaurant}
    }
    userSchema.findOneAndUpdate({username: decoded.username},update, function(err,doc){
        res.status(200);
    });
}