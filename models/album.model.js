import mongoose from "mongoose";

const albumSchema= new mongoose.Schema({
  urlImages:{
    type: Array
  },
  description:{
    type: String,
    trim: true
  },
  photoUser_id:{
    type: String,
    trim: true
  },
  scaner_id:{
    type: String,
    trim: true
  },
  camera_id:{
    type: String,
    trim: true
  },
  rollo_id:{
    type: String,
    trim: true
  },
  aproved: {
    type: Boolean
  }
})

export default mongoose.model('Album', albumSchema)

/*
urlImages
description
photoUser_id
scaner_id
camera_id
rollo_id
aproved
*/