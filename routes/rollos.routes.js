import { Router } from "express";
import {getAllRollos, createRollo, getOneRollo, editRollo, deleteRollo} from '../controllers/rollos.controller.js';


export const rollosRoutes = Router()
                            .get('/',getAllRollos)
                            .post('/',createRollo)
                            .get('/:id',getOneRollo)
                            .put('/:id',editRollo)
                            .delete('/:id',deleteRollo)