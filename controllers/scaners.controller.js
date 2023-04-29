import Scaner from '../models/scaners.model.js';
import { uploadOneFileToBucket } from '../lib/rollos.lib.js';
import fs from 'fs';
import { AWS_BUCKETNAME } from '../config.js';
import { __dirname } from '../app.js';



//Me devuelve todos los scaners
export const getAllScaner = async(req,res)=>{
    let objRes = {
        msg: 'Recuperando dataAllScaners..'
    }
    try {
        const result = await Scaner.find();
        
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

//Me crea un nuevo scaner en la base de datos
export const createScaner = async(req,res)=>{
    const dataBody = req.body;
    const dataFile = req.files.imagen;
    let objRes = {
        msg: 'Creando Scaner..',
        dataBody,
        dataFile
    }
    //console.log(objRes);
    
    try {
        const resultCreate = new Scaner(dataBody);
        await resultCreate.save();
        if(resultCreate._id){
            const responseUpload = await uploadOneFileToBucket(dataFile,resultCreate._id);
            if(responseUpload){
                dataBody.imageUrl=`https://${AWS_BUCKETNAME}.s3.amazonaws.com/${resultCreate._id}/${dataFile.name}`;
                const responseUpdate = await Scaner.findByIdAndUpdate({_id:resultCreate._id},{...dataBody},{new:true});
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

//Me devuelve los datos del scaner en especifico
export const getOneScaner = async(req,res)=>{
    const {id} = req.params;
    let objRes = {
        msg: 'Recuperando dataOneScanerByID..'
    }
    try {
        const result = await Scaner.findById({_id:id});
        
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

//Me permite editar un scaner 
export const editScaner = async(req,res)=>{
    const {id} = req.params;
    const dataScaner= req.body;
    let objRes = {
        msg: 'Editando dataOneScanerByID..'
    }
    try {
        const result = await Scaner.findByIdAndUpdate({_id:id},{...dataScaner},{new:true});
        
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

//Elimina un scaner de la base de datos segun su id
export const deleteScaner = async(req,res)=>{
    const {id} = req.params;
    
    let objRes = {
        msg: 'Eliminando oneScanerByID..'
    }
    try {
        const result = await Scaner.findByIdAndDelete({_id:id});
        
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