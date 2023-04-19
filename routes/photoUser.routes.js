import {Router} from "express";
import { createUser, getIndex } from "../controllers/photoUser.controller.js";



export const photoUserRoutes= Router()
                        .get('/',getIndex)
                        .post('/',createUser)