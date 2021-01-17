// const handleLogin = () => {
//     axios.post("/login",{username,password})
//       .then(res=>{
//         console.log(res.data)
//         if(res.data.err) {
//           throw new Error(res.data.err)
//         }
//         window.location.href = res.data.redirect;
//       })
//       .catch((err)=>{
//         alert(err);
//       })
//   };

//   const handleSignUp = () => {
//     axios.post("/signup",{username,password})
//       .then(res=>{
//         if(res.data.err) {
//           alert('User exists in DB');
//         }
//         // window.location.href = res.data.redirect;
//       });


const login = (username: string,password: string): void =>{
    console.log(username,password)
};

const signup = (username: string, password:string): void => {
    console.log(username,password)
}

module.exports = {login, signup}
