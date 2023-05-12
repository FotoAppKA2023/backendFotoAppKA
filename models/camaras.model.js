import mongoose from "mongoose";

const camaraSchema= new mongoose.Schema({
  modelo:{
    type: String,
    trim: true
  },
  marca:{
    type: String,
    trim: true
  },
  formato:{
    type: String,
    trim: true
  },
  tipo:{
    type: String,
    trim: true
  },
  description:{
    type: String,
    trim: true
  },
  link:{
    type: Array
  },
  imageUrl:{
    type: String,
    trim: true
  }
})

export default mongoose.model('Camara', camaraSchema)