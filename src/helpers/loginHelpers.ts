
const axios = require('axios');


const handleLogin =  async (username: string, password: string, APP_URL, formType: string): Promise<String> =>
{ 
    const URL = `${APP_URL}/api/${formType}`;
    const data = await axios.post(URL, {username,password})
        .then((res: any) => {
            return res.data;
        });
    return data;
}
const login =  (username: string, password: string, APP_URL: string): Promise<String> => handleLogin(username, password, APP_URL, 'login')

const signup = (username: string, password: string, APP_URL: string): Promise<String> => handleLogin(username, password, APP_URL, 'signup')


export {login, signup}