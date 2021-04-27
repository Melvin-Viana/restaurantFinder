# Restaurant Finder
Find the nearest restaurants using the user's IP.

## Prerequesites
- Node/NPM
- MongoDB
- Typescript - [TS Download](https://www.typescriptlang.org/download)
- ESLint (Optional) - [Docs](https://eslint.org/docs/user-guide/getting-started)
- PORT 3000 needs to be empty, or you can change the port in backend/server.ts

## Setup Environment Variables
- In order to use this application, you need to setup the environment variables for a .env file
### Setup Environment File
On the project's root directory create a .env file with the following structure:
```txt
YELP_API_KEY=
GOOGLE_API_KEY=
GEO_API_KEY=
HEROKU_PROXY_SERVER=
DB_URI=
REACT_APP_URL=
```
Acquire your API keys, MongoDB URI, and Client URL and place your values after the equals signs.

### API KEYS
- Generate API Keys for the following services:
1. YELP - https://www.yelp.com/developers/documentation/v3/authentication
2. GOOGLE APIS - https://developers.google.com/maps/documentation/javascript/overview
3. IPIFY - https://www.ipify.org/

### Heroku Proxy server
- Generate a CORS Proxy Server:

```sh
git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere/
npm install
heroku create
git push heroku master
```
- Use the url for the HEROKU_PROXY_SERVER environment variable

### MongoDB URI
- It may vary depending on what system your running on, for running this app on your local machine
- MongoDB URI Docs - https://docs.mongodb.com/manual/reference/connection-string/
-  Example for URI: 'mongodb://localhost:27017/restaurantFinder'

### REACT_APP_URL
- This is URL for the client
- The current setup is for 'http://localhost:3000' on a local machine
- For on a production environment fill it with URL the app is hosted on

## Usage
- Install dependencies: `npm install`
- Create environment variables on .env file
- Compile frontend and backend builds: `npm run build`
- Start the project: `npm start`