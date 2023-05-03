import {Router} from "express";
import { createAdminUser, deleteAdminUser, getAllAdminUser, getOneAdminUser, updateAdminUser, verificarAlbumes } from "../controllers/adminUser.controller.js";



export const adminUserRoutes = Router()
                                .get('/verificarAlbumes', verificarAlbumes)
                                .get('/getAllAdminUser',getAllAdminUser)
                                .get('/getOneAdminUser',getOneAdminUser)
                                .post('/createAdminUser',createAdminUser)
                                .put('/updateAdminUser',updateAdminUser)
                                .delete('/deleteAdminUser',deleteAdminUser)