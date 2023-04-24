// controladores de la Entidad album

import { uploadFilesToBucket } from "../lib/album.lib";


//Devuelve la lista de albumes de todos los usuarios
export const getAllAlbumes = (req,res)=>{
    return res.status(200).json("Devuelve la lista de albumes de todos los usuarios")
}

//Me crea un registro de album, y me devuelve el registro del album creado
export const createAlbum = async(req,res)=>{
    let dataText = req.body;
    let dataFiles = req.files;
    let objRes = {
        msg: "Creando un nuevo album(publicacion) (funcionalidad en desarrollo)"
    };
    try {
        const result = await uploadFilesToBucket();
        objRes= {
            ...objRes,
            result,
            dataText,
            dataFiles
        }
        return res.status(200).json(objRes);
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }
    
}

//Me devuelve la lista de albums del usuario
export const getMyAlbums = (req,res)=>{
    return res.status(200).json("Recupera los Albumes de un Usuario Fotografo:..")
}

//Recupera el album especificado
export const getOneAlbum = (req,res)=>{
    return res.status(200).json("Recupera un Album por id ..")
}

//Actualiza un album
export const updateAlbum = (req,res)=>{
    return res.status(200).json("Actualiza un Album por id ..")
}

//Elimina un album
export const deleteAlbum = (req,res)=>{
    return res.status(200).json("Elimina un Album por id ..")
}