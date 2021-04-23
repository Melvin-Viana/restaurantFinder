
module.exports = async (UserSchema, username: string, password: string) => {

    return UserSchema.findOne({username},  (err: any, user: any) => {
        if (err) throw 'DB ERROR';
    }).then(user =>{
        if (!user) throw 'User not found';
        const match = user.comparePassword(password, user.password);
        if (match) return user;
        throw 'Password does not match';
    });
 
}