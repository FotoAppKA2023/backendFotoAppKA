import Rollo from '../models/rollos.model.js';

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
    const dataRollo = {...req.body};
    let objRes = {
        msg: 'Creando rollo..'
    }
    try {
        const result = new Rollo(dataRollo);
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