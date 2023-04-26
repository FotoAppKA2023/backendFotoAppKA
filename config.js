import dotenv from "dotenv";


dotenv.config();

export const PORT = process.env.PORT;
export const DB_HOSTNAME = process.env.DB_HOSTNAME;
export const DB_NAME = process.env.DB_NAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_USERNAME = process.env.DB_USERNAME;
export const AWS_ACCESSKEYID= process.env.AWS_ACCESSKEYID;
export const AWS_SECRETACCESSKEY= process.env.AWS_SECRETACCESSKEY;
export const AWS_BUCKETNAME= process.env.AWS_BUCKETNAME;