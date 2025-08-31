import dotenv from  'dotenv';
dotenv.config();

export const config = {
  ENV: process.env.NODE_ENV , 
  PORT: process.env.PORT ,
  DATABASE_URI: process.env.NODE_ENV === 'dev' ? process.env.DATABASE_URI_DEV : process.env.DATABASE_URI_PROD,
  DB_CONNECTION_INTERVAL: process.env.DB_CONNECTION_INTERVAL,
  LOG_FILE_PATH: process.env.LOG_FILE_PATH 
};
