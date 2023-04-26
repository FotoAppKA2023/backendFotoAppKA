import {
  AWS_SECRETACCESSKEY,
  AWS_ACCESSKEYID,
  AWS_BUCKETNAME,
} from "../config.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import fs from "fs";
import { __dirname } from "../app.js";
import Album from '../models/album.model.js';


export const uploadFilesToBucket = async (dataFiles,photoUser_id,album_id) => {
  const client = new S3Client({
    credentials: {
      accessKeyId: AWS_ACCESSKEYID,
      secretAccessKey: AWS_SECRETACCESSKEY,
    },
    region: "us-east-1",
  });
  let response = {
    msg: "Proceso upLoadFilesToBubket:..",
  };
  try {
    dataFiles.forEach((item) => {
      fs.readFile(`${__dirname}/${item.tempFilePath}`, async (err, data) => {
        if (err) {
          console.log("error al leer el archivo:..", err);
        } else {
          console.log("alparecer todo ok al leer el archivo:..", data);
          const input = {
            ACL: "public-read",
            Body: data,
            Bucket: AWS_BUCKETNAME,
            Key: `${photoUser_id}/${album_id}/${item.name}`,
          };
          const command = new PutObjectCommand(input);
          const resultUpload = await client.send(command);
          //const resultUploadFile = `resultUpload${item.name}`;
          response = {
            ...response,
            [item.name]: resultUpload,
          };
        }
      });
    });

    return response;
  } catch (error) {
    return {
      ...response,
      error,
    };
  }
};

export const createAlbumInDB = async({title,description,photouser_id})=>{
  let objRes = {
    msg: 'Feature createAlbumInDB:..'
  }
  try {
    const newAlbum = new Album({title,description,photouser_id});
    const resultCreateAlbumInDB = newAlbum.save();
    objRes = {
      ...objRes,
      resultCreateAlbumInDB
    }
    return objRes
  } catch (error) {
    objRes = {
      ...objRes,
      error
    }
    return objRes
  }
}

export const updateAlbumInDB = async(dataUrlImages,album_id)=>{
  let objRes = {
    msg: "Feature updateAlbumInDB"
  }
  try {
    const resultUpdateAlbumInDB = await Album.findOne({_id:album_id},{$set:{urlImages:[...dataUrlImages]}});
    objRes = {
      ...objRes,
      resultUpdateAlbumInDB
    }
    return objRes
  } catch (error) {
    objRes = {
      ...objRes,
      error
    }
    return objRes
  }
}