import Scaner from '../models/scaners.model.js';


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
    const dataScaner = {...req.body};
    let objRes = {
        msg: 'Creando Scaner..'
    }
    try {
        const result = new Scaner(dataRollo);
        await result.save();
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