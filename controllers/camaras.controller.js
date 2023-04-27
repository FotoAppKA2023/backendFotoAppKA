import Camera from '../models/camaras.model.js';


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
    const dataCamera = {...req.body};
    let objRes = {
        msg: 'Creando camara..'
    }
    try {
        const result = new Camera(dataCamera);
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

//Me devuelve los datos de la camara en especifico
export const getOneCamara = async(req,res)=>{
    const {id} = req.params;
    let objRes = {
        msg: 'Recuperando dataOneCameraByID..'
    }
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