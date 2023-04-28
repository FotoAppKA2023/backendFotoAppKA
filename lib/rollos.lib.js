import {
    AWS_SECRETACCESSKEY,
    AWS_ACCESSKEYID,
    AWS_BUCKETNAME,
  } from "../config.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from 'fs';
import { __dirname } from "../app.js";





export const uploadOneFileToBucket = async (
    dataFile,
    target_id
  ) => {
    const client = new S3Client({
      credentials: {
        accessKeyId: AWS_ACCESSKEYID,
        secretAccessKey: AWS_SECRETACCESSKEY,
      },
      region: "us-east-1",
    });
    let response = {
      msg: "Proceso upLoadOneFileToBubket:..",
    };
    try {
      
  
        fs.readFile(`${__dirname}/${dataFile.tempFilePath}`, async (err, data) => {
          if (err) {
            console.log("error al leer el archivo:..", err);
          } else {
            console.log("alparecer todo ok al leer el archivo:..", data);
            const input = {
              ACL: "public-read",
              Body: data,
              Bucket: AWS_BUCKETNAME,
              Key: `${target_id}/${dataFile.name}`,
            };
            const command = new PutObjectCommand(input);
            const resultUpload = await client.send(command);
            //const resultUploadFile = `resultUpload${item.name}`;
            
            response = {
              ...response,
              resultUpload,
            };
          }
        });
        
      
  
      return response;
    } catch (error) {
      return {
        ...response,
        error,
      };
    }
  };