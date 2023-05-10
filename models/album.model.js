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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PhotoUser'
  },
  scaner_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scaner'
  },
  camera_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camara'
  },
  rollo_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rollo'
  },
  aproved: {
    type: Boolean
  }
})

export default mongoose.model('Album', albumSchema)

