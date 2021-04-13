module.exports = async (UserSchema, username: string, password: string) => {

    return UserSchema.findOne({username},  (err: any, user: any) => {
        if (err) return 'User not found';
    }).then(user =>{
        const match = user.comparePassword(password, user.password);
        if (match) return user;
        return 'Password does not match'
    });
 
}