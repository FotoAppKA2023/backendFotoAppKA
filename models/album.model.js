import mongoose from "mongoose";

const albumSchema= new mongoose.Schema({
  urlImages:{
    type: Array
  },
  title:{
    type: String,
    trim: true
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

