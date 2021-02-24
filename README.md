
## API KEYS
- Generate API Keys for the following services:
1. YELP - https://www.yelp.com/developers/documentation/v3/authentication
2. GOOGLE APIS - https://developers.google.com/maps/documentation/javascript/overview
3. IPIFY - https://www.ipify.org/

## Heroku Proxy server
- Generate a CORS Proxy Server:

```sh
git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere/
npm install
heroku create
git push heroku master
```
- Use the url to this proxy server in 4
## Setup Config
Create a config.js file with the following structure:
```javascript
module.exports = {
    YELP_API_KEY: `${1}`
    GOOGLE_API_KEY: `${2}`
    GEO_API_KEY: `${3}`
    HEROKU_PROXY_SERVER: `${4}
}
```