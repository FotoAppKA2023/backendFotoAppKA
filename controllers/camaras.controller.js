import Camera from '../models/camaras.model.js';


//Me devuelve todas los camaras
export const getAllCamara = (req,res)=>{
    return res.status(200).json("Me devuelve todas los camaras")
}

//Me crea un nuevo camara en la base de datos
export const createCamara = async(req,res)=>{
    const dataCamera = {...req.body}
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
export const getOneCamara = (req,res)=>{
    return res.status(200).json("Me devuelve los datos de la camara en especifico")
}

//Me permite editar un camara 
export const editCamara = (req,res)=>{
    return res.status(200).json("Me permite editar un camara")
}

//Elimina un camara de la base de datos segun su id
export const deleteCamara = (req,res)=>{
    return res.status(200).json("Elimina una camara de la base de datos segun su id")
}