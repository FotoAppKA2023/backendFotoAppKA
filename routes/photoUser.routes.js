import {Router} from "express";
import { createPhotoUser, getIndex, getOnePhotoUser,updatePhotoUser, deletePhotoUser } from "../controllers/photoUser.controller.js";



export const photoUserRoutes= Router()
                        .get('/',getIndex)
                        .post('/',createPhotoUser)
                        .get('/:id',getOnePhotoUser)
                        .put('/:id',updatePhotoUser)
                        .delete('/:id',deletePhotoUser)