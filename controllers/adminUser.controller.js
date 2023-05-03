import Admin from '../models/adminUser.model.js';

//Me devuelve todos los Albumes pendientes de verificar

export const verificarAlbumes = (req,res)=>{
    return res.status(200).json("Me devuelve todos los Albumes pendientes de verificar");
}

export const getAllAdminUser = async(req,res)=>{
    let objRes = {
        msg: 'Recuperando dataAllAdminUser..'
    }
    try {
        const result = await Admin.find();

        objRes= {
            ...objRes,
            result
        }

        return res.status(200).json(objRes);
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }

}

export const getOneAdminUser = async(req,res)=>{
    const {idUser} = req.query;
    let objRes = {
        msg: 'Recuperando dataAdminUserByID..'
    }
    try {
        const result = await Admin.findById({_id:idUser});

        objRes= {
            ...objRes,
            result
        }

        return res.status(200).json(objRes);
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }

}

export const createAdminUser = async(req,res)=>{
    const dataBody = req.body;
    let objRes = {
        msg: 'Creando adminUser..'
    }
    try {
        const result = new Admin(dataBody);
        await result.save();

        objRes= {
            ...objRes,
            result
        }

        return res.status(200).json(objRes);
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }

}

export const updateAdminUser = async(req,res)=>{
    const dataBody = req.body;
    let objRes = {
        msg: 'Editando adminUser..'
    }
    try {
        const result = await Admin.findByIdAndUpdate({_id:dataBody._id},dataBody,{new:true});
        objRes= {
            ...objRes,
            result
        }
        return res.status(200).json(objRes);
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        return res.status(500).json(objRes);
    }

}

export const deleteAdminUser = async(req,res)=>{
    const {idUser} = req.query;
    let objRes = {
        msg: 'Emininando adminUser..'
    }
    try {
        const result = await Admin.findByIdAndDelete({_id:idUser});
        objRes= {
            ...objRes,
            result
        }
        console.log(objRes);
        return res.status(200).json(objRes);
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        console.log(objRes);
        return res.status(500).json(objRes);
    }

}