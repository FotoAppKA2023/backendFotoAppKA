import { uploadOneFileToBucket } from '../lib/rollos.lib.js';
import { AWS_BUCKETNAME } from '../config.js';
import Rollo from '../models/rollos.model.js';
import fs from 'fs';
import { __dirname } from '../app.js';

//Me devuelve todos los rollos
export const getAllRollos = async(req,res)=>{
    let objRes = {
        msg: 'Recuperando dataAllRollos..'
    }
    try {
        const result = await Rollo.find();
        
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

//Me crea un nuevo rollo en la base de datos
export const createRollo = async(req,res)=>{
    const dataRollo = req.body;
    const dataFile = req.files.imagenRollo;
    let objRes = {
        msg: 'Creando rollo..',
        dataRollo,
        dataFile
    }
    //console.log(objRes);
    
    try {
        const resultCreate = new Rollo(dataRollo);
        await resultCreate.save();
        if(resultCreate._id){
            const responseUpload = await uploadOneFileToBucket(dataFile,resultCreate._id);
            if(responseUpload){
                dataRollo.imageUrl=`https://${AWS_BUCKETNAME}.s3.amazonaws.com/${resultCreate._id}/${dataFile.name}`;
                const responseUpdate = await Rollo.findByIdAndUpdate({_id:resultCreate._id},{...dataRollo},{new:true});
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

//Me devuelve los datos del rollo en especifico
export const getOneRollo = async(req,res)=>{
    const {id} = req.params;
    let objRes = {
        msg: 'Recuperando dataOneRolloByID..'
    }
    try {
        const result = await Rollo.findById({_id:id});
        
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

//Me permite editar un rollo 
export const editRollo = async(req,res)=>{
    const {id} = req.params;
    const dataRollo= req.body;
    let objRes = {
        msg: 'Editando dataOneRolloByID..'
    }
    try {
        const result = await Rollo.findByIdAndUpdate({_id:id},{...dataRollo},{new:true});
        
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

//Elimina un rollo de la base de datos segun su id
export const deleteRollo = async(req,res)=>{
    const {id} = req.params;
    
    let objRes = {
        msg: 'Eliminando oneRolloByID..'
    }
    try {
        const result = await Rollo.findByIdAndDelete({_id:id});
        
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