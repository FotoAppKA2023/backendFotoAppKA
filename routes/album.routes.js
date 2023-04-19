import {Router} from "express";
import { createAlbum, getAllAlbumes, getMyAlbums, getOneAlbum, updateAlbum, deleteAlbum } from "../controllers/album.controller.js";



export const albumRoutes = Router()
                            .get('/allAlbums',getAllAlbumes)
                            .post('/',createAlbum)
                            .get('/myAlbums/:idPhotoUser',getMyAlbums)
                            .get('/:id',getOneAlbum)
                            .put('/:id',updateAlbum)
                            .delete('/:id',deleteAlbum)
