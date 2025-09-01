import dotenv from  'dotenv';
dotenv.config();

export const config = {
  ENV: process.env.NODE_ENV , 
  PORT: process.env.PORT ,
  DATABASE_URI: process.env.NODE_ENV === 'dev' ? process.env.DATABASE_URI_DEV : process.env.DATABASE_URI_PROD,
  DB_CONNECTION_INTERVAL: process.env.DB_CONNECTION_INTERVAL,
  LOG_FILE_PATH: process.env.LOG_FILE_PATHM,
  DB_HOST : process.env.DB_HOST,
  DB_NAME : process.env.DB_NAME,
  DB_PASSWORD : process.env.DB_PASSWORD,
  DB_PORT : process.env.DB_PORT,
  DB_USER : process.env.DB_USER
};
