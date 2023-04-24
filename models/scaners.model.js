import mongoose from "mongoose";

const scanersSchema= new mongoose.Schema({
  nombre:{
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
  iso:{
    type: String,
    trim: true
  },
  grano:{
    type: String,
    trim: true
  },
  tomas:{
    type: Number
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

export default mongoose.model('Scaners', scanersSchema)