
module.exports = async (UserSchema:any, username: string, password: string) => {
    return UserSchema.findOne({username},  (err: any) => {
        if (err) throw 'DB ERROR';
    }).then((userObj: any) =>{
        if (!userObj) throw 'User not found';
        const match = userObj.comparePassword(password, userObj.password);
        if (match) return userObj;
        throw 'Password does not match';
    });

}