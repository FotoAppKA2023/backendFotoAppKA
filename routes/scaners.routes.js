import { Router } from "express";
import {getAllScaner, createScaner, getOneScaner, editScaner, deleteScaner} from '../controllers/scaners.controller.js';


export const scanersRoutes = Router()
                            .get('/',getAllScaner)
                            .post('/',createScaner)
                            .get('/:id',getOneScaner)
                            .put('/:id',editScaner)
                            .delete('/:id',deleteScaner)