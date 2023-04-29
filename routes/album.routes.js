import {Router} from "express";
import { createAlbum, getAllAlbumes, getMyAlbums, getOneAlbum, updateAlbum, deleteAlbum } from "../controllers/album.controller.js";



export const albumRoutes = Router()
                            .get('/allAlbums',getAllAlbumes)
                            .post('/',createAlbum)
                            .get('/myAlbums',getMyAlbums)
                            .get('/getOneAlbum',getOneAlbum)
                            .put('/updateAlbum',updateAlbum)
                            .delete('/deleteAlbum',deleteAlbum)
