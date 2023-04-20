import mongoose from "mongoose";

const adminUserSchema= new mongoose.Schema({
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

export default mongoose.model('AdminUser', adminUserSchema)



