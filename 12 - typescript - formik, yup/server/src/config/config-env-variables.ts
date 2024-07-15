import { config } from 'dotenv';
config();


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

const missingEnvVariables: string[] = [];
Object.entries(requiredEnvVariables).forEach(([key, value]) => {
  if (!value) {
    missingEnvVariables.push(key);
  }
});

if (missingEnvVariables.length > 0) {
  const missingVariableNames = missingEnvVariables.join('\t\n');
  throw new Error(`Variables are not provided in .env file: \n${missingVariableNames}\n`);
}

export const envVariables = {
  server: {
    port: SERVER_PORT as string,
  },
  jwt: {
    secret: TOKEN_SECRET as string,
    expiration: TOKEN_EXPIRATION as string,
  },
  db: {
    connection: DB_CONNECTION as string,
  },
};

