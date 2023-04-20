import mongoose from "mongoose";

const albumSchema= new mongoose.Schema({
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

export default mongoose.model('Album', albumSchema)

/*urlImages
description
photoUser_id
scaner_id
camera_id
rollo_id
aproved*/