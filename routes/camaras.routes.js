import { Router } from "express";
import {getAllCamara, createCamara, getOneCamara, editCamara, deleteCamara} from '../controllers/camaras.controller.js';


export const camarasRoutes = Router()
                            .get('/',getAllCamara)
                            .post('/',createCamara)
                            .get('/getOneCamara',getOneCamara)
                            .put('/editCamara',editCamara)
                            .delete('/deleteCamara',deleteCamara)