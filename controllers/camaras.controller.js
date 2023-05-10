import Camera from '../models/camaras.model.js';
import { uploadOneFileToBucket } from '../lib/rollos.lib.js';
import fs from 'fs';
import { AWS_BUCKETNAME } from '../config.js';
import { __dirname } from '../app.js';


//Me devuelve todas los camaras
export const getAllCamara = async(req,res)=>{
    let objRes = {
        msg: 'Recuperando dataAllCameras..'
    }
    try {
        const result = await Camera.find();
        
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
    
}

//Me crea un nuevo camara en la base de datos
export const createCamara = async(req,res)=>{
    const dataBody = req.body;
    const dataFile = req.files?.imagen||'';
    let objRes = {
        msg: 'Creando Camara..',
        dataBody,
        dataFile
    }
    //console.log(objRes);
    
    try {
        const resultCreate = new Camera(dataBody);
        await resultCreate.save();
        if(resultCreate._id && dataFile){
            const responseUpload = await uploadOneFileToBucket(dataFile,resultCreate._id);
            if(responseUpload){
                dataBody.imageUrl=`https://${AWS_BUCKETNAME}.s3.amazonaws.com/${resultCreate._id}/${dataFile.name}`;
                const responseUpdate = await Camera.findByIdAndUpdate({_id:resultCreate._id},{...dataBody},{new:true});
                if(responseUpdate){
                    objRes ={
                        ...objRes,
                        responseUpdate,
                        responseUpload
                    }
                    fs.unlink(`${__dirname}/${dataFile.tempFilePath}`, function(err) {
                        if (err) {
                           console.log(err);
                        } else {
                          console.log("Successfully deleted the file.")
                        }
                      })            
                }
            }

        }
        
        
        objRes ={
            ...objRes,
            resultCreate,
            msgRes:'Proceso concluido con exito..'
        }
        console.log(objRes);
        return res.status(200).json(objRes);
    } catch (error) {
        objRes ={
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }
    
}

//Me devuelve los datos de la camara en especifico
export const getOneCamara = async(req,res)=>{
    const dataBody = req.body;
    let objRes = {
        msg: 'Recuperando dataOneCameraByID..',
        dataBody
    }
    console.log(objRes);
    return res.status(200).json(objRes);
    try {
        const result = await Camera.findById({_id:id});
        
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
    
}

//Me permite editar un camara 
export const editCamara = async(req,res)=>{
    const {id} = req.params;
    const dataCamera= req.body;
    let objRes = {
        msg: 'Editando dataOneCameraByID..'
    }
    try {
        const result = await Camera.findByIdAndUpdate({_id:id},{...dataCamera},{new:true});
        
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
}

//Elimina un camara de la base de datos segun su id
export const deleteCamara = async(req,res)=>{
    const {id} = req.params;
    
    let objRes = {
        msg: 'Eliminando oneCameraByID..'
    }
    try {
        const result = await Camera.findByIdAndDelete({_id:id});
        
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
}