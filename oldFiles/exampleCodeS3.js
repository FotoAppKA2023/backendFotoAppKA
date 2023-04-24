//import AWS from 'aws-sdk';
import {
  S3,
  S3Client,
  AbortMultipartUploadCommand,
  GetObjectCommand,
  PutObjectCommand,
  PutBucketCorsCommand
} from "@aws-sdk/client-s3";

import fs from "fs"
import { Buffer } from 'node:buffer';
import { __dirname } from "../app.js";


// Load the AWS SDK for Node.js

export const s3getObject = async () => {
  //arn:aws:s3:::imagesfrontendfotoappkodemia
  //s3://imagesfrontendfotoappkodemia/imgRollosPopulares/Rollo1.png
  //fotoappkodemia@gmail.com
  //050016749178  Account ID
  //AKIAQXJJ3AZ5NUYZ67GQ  Access key
  //kzOQkWqZyuQcrWijo5rGHnUb7urSr2hFDmG0I8ET  secretAccesskey
  try {
    const client = new S3({
      credentials: {
        accessKeyId: "AKIAQXJJ3AZ5NUYZ67GQ",
        secretAccessKey: "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",
      },
      region: "us-east-1",
    });

    const params = {
      Bucket: "imagesfrontendfotoappkodemia" /* required */,
      ExpectedBucketOwner: "050016749178",
    };
    client.getBucketEncryption(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        console.log(data);
        console.log(data.ServerSideEncryptionConfiguration.Rules);
      } // successful response
    });

    const getObjectResult = await client.getObject({
      Bucket: "imagesfrontendfotoappkodemia",
      Key: "./keyfotoappkodemia.pem",
    });

    // env-specific stream with added mixin methods.
    const bodyStream = getObjectResult.Body;
    console.log("bodyStream:..", bodyStream);
    // one-time transform.
    const bodyAsString = await bodyStream.transformToString();
    console.log("bodyAsString:..", bodyAsString);
    // throws an error on 2nd call, stream cannot be rewound.
    const myError = await bodyStream.transformToString();
    console.log("myError:..", myError);
  } catch (error) {
    console.log("error en la peticion:..", error);
  }
};

export const newS3getObject = async () => {
  const client = new S3Client({
    credentials: {
      accessKeyId: "AKIAQXJJ3AZ5NUYZ67GQ",
      secretAccessKey: "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",
    },
    region: "us-east-1",
  });

  const command = new GetObjectCommand({
    Bucket: "pruebaskeyaccesfotoappkodemia",
    Key: "Rollo1.png",
  });

  try {
    const response = await client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    console.log("Response.body:..", response.Body);
    //const str = await response.Body.transformToString();
    //console.log(str);
  } catch (err) {
    console.error(err);
  }
};

export const myS3PutObject = async () => {
  const client = new S3Client({
    credentials: {
      accessKeyId: "AKIAQXJJ3AZ5NUYZ67GQ",
      secretAccessKey: "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",
    },
    region: "us-east-1",
  });

   //myfotoappbucket
   //pruebaskeyaccesfotoappkodemia
  try {
        fs.readFile(`${__dirname}/oldFiles/tazaMiniso.jpg`, async (err,data)=>{
        if(err)
        {
            console.log('error al leer el archivo:..',err)
        }else{
            console.log('alparecer todo ok al leer el archivo:..',data);
            const input = {
                ACL: "public-read",
                Body: data,
                Bucket: "myfotoappbucket",
                Key: "otracarpeta/tazaMiniso.jpg",
              };
              const command = new PutObjectCommand(input);
              const response = await client.send(command);
              console.log('response:..',response);
        }
  })
  

    
  } catch (error) {
    console.log('error en la petecion:..',error);
  }
}

export const putCorsPolicy = async()=>{
    

const client = new S3Client({credentials: {
    accessKeyId: "AKIAQXJJ3AZ5NUYZ67GQ",
    secretAccessKey: "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",
  },
  region: "us-east-1",})

// By default, Amazon S3 doesn't allow cross-origin requests. Use this command
// to explicitly allow cross-origin requests.

  const command = new PutBucketCorsCommand({
    Bucket: "imgfrontfotoappkodemia",
    CORSConfiguration: {
      CORSRules: [
        {
          // Allow all headers to be sent to this bucket.
          AllowedHeaders: ["*"],
          // Allow only GET and PUT methods to be sent to this bucket.
          AllowedMethods: ["GET", "PUT"],
          // Allow only requests from the specified origin.
          AllowedOrigins: ["*"],
          // Allow the entity tag (ETag) header to be returned in the response. The ETag header
          // The entity tag represents a specific version of the object. The ETag reflects
          // changes only to the contents of an object, not its metadata.
          ExposeHeaders: ["ETag"],
          // How long the requesting browser should cache the preflight response. After
          // this time, the preflight request will have to be made again.
          MaxAgeSeconds: 3600,
        },
      ],
    },
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }

}


/**
 * response:.. {
  '$metadata': {
    httpStatusCode: 200,
    requestId: '30DJEDJ7YPRFWN9S',
    extendedRequestId: 'hCce489rO67zSZMmyYrpfbBoffTIK1T4xNvPb6RV2ZGXwauwO4YLbGZ5VL6eFXDEbYG0QTkl19s=',
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0
  },
  ETag: '"73d427b11fcdbceedaf770784316af2f"',
  ServerSideEncryption: 'AES256'
}
 * 
https://myfotoappbucket.s3.amazonaws.com/<carpetadCliente>/<carpetaAlbum>/<nombreArchivo>

 */
