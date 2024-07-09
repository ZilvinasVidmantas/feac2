require('dotenv').config();

const {
  SERVER_PORT,
  DB_CONNECTION,
  TOKEN_SECRET,
  TOKEN_EXPIRATION,
} = process.env;

const requiredEnvVariables = {
  SERVER_PORT,
  DB_CONNECTION,
  TOKEN_SECRET,
  TOKEN_EXPIRATION,
};

const missingEnvVariables = [];
Object.entries(requiredEnvVariables).forEach(([key, value]) => {
  if(!value) {
    missingEnvVariables.push(key)
  }
});

if(missingEnvVariables.length> 0) {
  var missingVariableNames = missingEnvVariables.join('\t\n');
  throw new Error('Variables are not provided in .env file: \n' +missingVariableNames + '\n');
}

const envVariables = {
   server: {
    port: SERVER_PORT,
   },
   jwt: {
    secret: TOKEN_SECRET,
    expiration: TOKEN_EXPIRATION,
   },
   db: {
    connection: DB_CONNECTION,
   },
}

module.exports = envVariables;
