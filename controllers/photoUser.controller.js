//Controladores de la Entidad photoUser

import { createPhotoUserInDB, getOnePhotoUserInDB } from "../lib/photoUser.lib.js";
import PhotoUser from "../models/photoUser.model.js";


//(index) devuelve la lista de usuarios
export const getIndex = async(req,res)=>{
    let objRes = {
        msg: 'Recuperando dataAllPhotoUsers..'
    }
    try {
        const result = await PhotoUser.find();
        
        objRes ={
            ...objRes,
            result
        }
        return res.status(200).json(objRes);
    } catch (error) {
        objRes ={
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }
    return res.status(200).json("Devuelve la lista de usuarios Fotografo..");
}

//Me crea un registro de usuario
export const createPhotoUser = async(req,res)=>{
    const dataPhotoUser = {...req.body};
    let objRes= {
        msg: 'Creando usuario Fotografo..'
    }
    try {

        const resultCreatePhotoUser = await createPhotoUserInDB(dataPhotoUser);
        objRes = {
            ...objRes,
            resultCreatePhotoUser
        }
        return res.status(200).json(objRes);    
    } catch (error) {
        objRes = {
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }
    
}

//Obtener un usuario por ID
export const getOnePhotoUser = async (req,res)=>{
    
    const dataParams = req.query;

    let objRes = {
        msg: 'Recuperando DataPhotoUserByID..',
        dataParams
    }
    //console.log(req.query);
    //console.log(objRes);
    //return res.status(200).json(objRes);
    try {
        const result = await getOnePhotoUserInDB(dataParams.idPhotoUser);
        objRes={
            ...objRes,
            result
        }
        console.log(objRes);
        return res.status(200).json(objRes);
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }
    
}

//Me actualiza un usuario existente por ID
export const updatePhotoUser = async(req,res)=>{
    const dataBody = req.body;

    let objRes = {
        msg: 'Actualizando DataPhotoUserByID..',
        dataBody
    }
    
    try {
        const result = await PhotoUser.findByIdAndUpdate({_id:dataBody._id},dataBody,{new:true});
        objRes={
            ...objRes,
            result
        }
        console.log(objRes);
        return res.status(200).json(objRes);
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }
}

//Me permite borrar un usuario por ID
export const deletePhotoUser = async(req,res)=>{
    const dataBody = req.body;

    let objRes = {
        msg: 'Eliminando photoUserByID..',
        dataBody
    }
    
    try {
        const result = await PhotoUser.findByIdAndUpdate({_id:dataBody._id});
        objRes={
            ...objRes,
            result
        }
        console.log(objRes);
        return res.status(200).json(objRes);
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }
}
