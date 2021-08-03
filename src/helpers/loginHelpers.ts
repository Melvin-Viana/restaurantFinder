const axios = require('axios');

const handleLogin =  async (username: string, password: string, formType: string): Promise<String> =>
{ 
    const URL = `/api/${formType}`;
    const data = await axios.post(URL, {username,password})
        .then((res: any) => {
            return res.data;
        });
    return data;
}
const login =  (username: string, password: string, APP_URL: string): Promise<String> => handleLogin(username, password, 'login')

const signup = (username: string, password: string, APP_URL: string): Promise<String> => handleLogin(username, password, 'signup')

export {login, signup}