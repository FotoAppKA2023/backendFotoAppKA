import mongoose from "mongoose";

const photoUserSchema= new mongoose.Schema({
  nombre:{
    type: String,
    trim: true
  },
  apellido:{
    type: String,
    trim: true
  },
  email:{
    type: String,
    trim: true
  },
  password:{
    type: String,
    trim: true
  }
})

export default mongoose.model('PhotoUser', photoUserSchema)
