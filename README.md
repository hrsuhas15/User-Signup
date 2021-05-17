# User-Signup

1. Install NodeJS and NPM from  https://nodejs.org/en/download/.
2. Download or clone the project source code from https://github.com/cornflourblue/node-mongo-registration-login-api
3. Install all required npm packages by running npm install from the command line in the project root folder (where the package.json is located).
4. Start the api by running npm start from the command line in the project root folder, you should see the message Server listening on port 4000. 

Signup new users with localhost:4000/users/signup.
body contents:
{ "username": "string",
"email": "string",
"password": "string"
}

This code is just for user signup through Rest API. Only single POST request
