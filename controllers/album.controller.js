// controladores de la Entidad album

import { uploadFilesToBucket, createAlbumInDB, updateAlbumInDB } from "../lib/album.lib.js";
import { AWS_BUCKETNAME } from "../config.js";

//Devuelve la lista de albumes de todos los usuarios
export const getAllAlbumes = (req, res) => {
  return res
    .status(200)
    .json("Devuelve la lista de albumes de todos los usuarios");
};

//Me crea un registro de album, y me devuelve el registro del album creado
export const createAlbum = async (req, res) => {
  const { title, description, photoUser_id } = req.body;

  const dataFiles = req.files;
  //const myReqImages = req.images;
  //const myreq = req;
  //64488bcc2c6d1d8daf5a2002 idPhotoUserPruebas
  let objRes = {
    msg: "Creando un nuevo album(publicacion) (funcionalidad en desarrollo)",
  };
  try {
    const responseCreateAlbumInDB = createAlbumInDB(
      title,
      description,
      photoUser_id
    );
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
      objRes = {
        ...objRes,
        dataBody,
        dataFiles,
        resultUpload,
        responseUpdateAlbumInDB,
        album_id,
        urlImages
      };
      console.log("objRes:..", objRes);
      return res.status(200).json(objRes);
    } else {
      objRes = {
        ...objRes,
        posibleError: "talvez no hay conexion con la DB:..",
      };
      return res.status(204).json(objRes);
    }
  } catch (error) {
    objRes = {
      ...objRes,
      error,
    };
    return res.status(500).json(objRes);
  }
};

//Me devuelve la lista de albums del usuario
export const getMyAlbums = (req, res) => {
  return res
    .status(200)
    .json("Recupera los Albumes de un Usuario Fotografo:..");
};

//Recupera el album especificado
export const getOneAlbum = (req, res) => {
  return res.status(200).json("Recupera un Album por id ..");
};

//Actualiza un album
export const updateAlbum = (req, res) => {
  return res.status(200).json("Actualiza un Album por id ..");
};

//Elimina un album
export const deleteAlbum = (req, res) => {
  return res.status(200).json("Elimina un Album por id ..");
};
