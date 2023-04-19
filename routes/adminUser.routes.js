import {Router} from "express";
import { verificarAlbumes } from "../controllers/adminUser.controller.js";



export const adminUserRoutes = Router()
                                .get('/verificarAlbumes', verificarAlbumes);