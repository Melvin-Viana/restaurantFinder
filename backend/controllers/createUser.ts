
module.exports = async (UserSchema, username:string, password:string) => {
    const userExists = await UserSchema.exists({username});
    if (userExists) throw 'User Exists';
    if (password === '') throw 'Password required';
    const user = await UserSchema.create({username, password});
    return user;
};