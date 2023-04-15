import mongoose from "mongoose";
import { DB_HOSTNAME, DB_NAME, DB_PASSWORD, DB_USERNAME } from "../config.js";

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true&w=majority`;



export async function connectDB() {
    try {
      mongoose.set('strictQuery', false);
      const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Connected to:", db.connection.db.namespace);
      if(db.connection.db.namespace){
        console.log(`Conexion exitosa a DB: ${db.connection.db.namespace}`);
      }else{
        console.log('Talvez hay un error en la conexion a la DB:...');
      }
    } catch (error) {
      
      console.error(`Talvez hay un error en la conexion a la DB:...${error}`);
    }
  }