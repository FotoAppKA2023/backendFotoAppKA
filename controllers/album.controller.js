import fs from 'fs';
import { __dirname } from '../app.js';
import Album from '../models/album.model.js';

// controladores de la Entidad album

import { uploadFilesToBucket, createAlbumInDB, updateAlbumInDB } from "../lib/album.lib.js";
import { AWS_BUCKETNAME } from "../config.js";

//Devuelve la lista de albumes de todos los usuarios
export const getAllAlbumes = async(req, res) => {
  let objRes = {
    msg: 'Recuperando dataAllAlbums..'
}
try {
    const result = await Album.find().sort({$natural:-1}).limit(20);
    
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
  
};

//Me crea un registro de album, y me devuelve el registro del album creado
export const createAlbum = async (req, res) => {
  const { description, photoUser_id, camera_id, scaner_id, rollo_id } = req.body;
  console.log(req.body);
  const dataFiles = req.files;
  //const myReqImages = req.images;
  //const myreq = req;
  //64488bcc2c6d1d8daf5a2002 idPhotoUserPruebas
  let objRes = {
    msg: "Creando un nuevo album(publicacion) (funcionalidad en desarrollo)",
    dataFiles,
    dataBody: req.body
  };
  //return res.status(200).json(objRes);
  try {
    const responseCreateAlbumInDB = await createAlbumInDB(
      description,
      photoUser_id,
      camera_id,
      scaner_id,
      rollo_id
    );
    console.log('responseCreateAlbumInDB:..',responseCreateAlbumInDB);
    if (responseCreateAlbumInDB) {
      const { resultCreateAlbumInDB } = responseCreateAlbumInDB;
      const album_id = resultCreateAlbumInDB._id;
      const resultUpload = await uploadFilesToBucket(
        dataFiles.files,
        photoUser_id,
        album_id
      );
      const urlImages = dataFiles.files.map(item=>{
        return `https://${AWS_BUCKETNAME}.s3.amazonaws.com/${photoUser_id}/${album_id}/${item.name}`
      })
      const responseUpdateAlbumInDB = await updateAlbumInDB(urlImages, album_id); 
      console.log(responseUpdateAlbumInDB);
      if (resultUpload){
        dataFiles.files.forEach(item=>{
          fs.unlink(`${__dirname}/${item.tempFilePath}`, function(err) {
            if (err) {
               console.log(err);
            } else {
              console.log("Successfully deleted the file.")
            }
          })
        })
      }
      objRes = {
        ...objRes,
        dataFiles,
        resultUpload,
        responseUpdateAlbumInDB,
        album_id,
        urlImages
      };
      console.log("objRes:..", objRes);
      
    } else {
      objRes = {
        ...objRes,
        posibleError: "talvez no hay conexion con la DB:..",
      };
      
    }
    return res.status(200).json(objRes);
  } catch (error) {
    objRes = {
      ...objRes,
      error,
    };
    console.log('Caso de error:',objRes);
    return res.status(500).json(objRes);
  }
};

//Me devuelve la lista de albums del usuario
export const getMyAlbums = async(req, res) => {
  const {idPhotoUser} = req.query;
  let objRes = {
    msg: 'Recuperando dataMyAlbumsByPhotoUserID..'
}
try {
    const result = await Album.find({photoUser_id:idPhotoUser});
    
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
};

//Recupera el album especificado
export const getOneAlbum = async(req, res) => {
  const {idAlbum} = req.query;
  let objRes = {
    msg: 'Recuperando dataAlbumsByID..'
}
try {
    const result = await Album.findById({_id:idAlbum});
    
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
};

//Actualiza un album
export const updateAlbum = async(req, res) => {
  const dataBody = req.body;
  let objRes = {
    msg: 'Recuperando dataAlbumsByID..',
  
}

try {
    const result = await Album.findByIdAndUpdate({_id:dataBody._id},dataBody,{new:true});
    
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
};

//Elimina un album
export const deleteAlbum = async(req, res) => {
  const {idAlbum} = req.query;
  let objRes = {
    msg: 'Recuperando dataAlbumsByID..',
  }
try {
    const result = await Album.findByIdAndDelete({_id:idAlbum});   
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
};
