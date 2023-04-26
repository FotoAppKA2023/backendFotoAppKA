//Controladores de la Entidad photoUser

import { createPhotoUserInDB } from "../lib/photoUser.lib.js";


//(index) devuelve la lista de usuarios
export const getIndex = (req,res)=>{
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
export const getOnePhotoUser = (req,res)=>{
    return res.status(200).json("Recuperando data de usuario Fotografo..");
}

//Me actualiza un usuario existente por ID
export const updatePhotoUser = (req,res)=>{
    return res.status(200).json("Actualizando usuario fotografo..")
}

//Me permite borrar un usuario por ID
export const deletePhotoUser = (req,res)=>{
    return res.status(200).json("Actualizando usuario fotografo..")
}
