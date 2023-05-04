import {Router} from "express";
import { createPhotoUser, getIndex, getOnePhotoUser,updatePhotoUser, deletePhotoUser, loginPhotoUser } from "../controllers/photoUser.controller.js";



export const photoUserRoutes= Router()
                        .get('/',getIndex)
                        .post('/',createPhotoUser)
                        .get('/getOnePhotoUser',getOnePhotoUser)
                        .put('/updatePhotoUser',updatePhotoUser)
                        .delete('/deletePhotoUser',deletePhotoUser)
                        .post('/login',loginPhotoUser)