import {Router} from "express";
import { createAlbum, getAllAlbumes } from "../controllers/album.controller.js";



export const albumRoutes = Router()
                            .get('/allAlbums',getAllAlbumes)
                            .post('/',createAlbum)