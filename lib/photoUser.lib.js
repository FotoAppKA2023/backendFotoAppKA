import PhotoUser from "../models/photoUser.model.js";


export const createPhotoUserInDB = async({nombre,apellido,email,password})=>{
    
    let objRes = {
        msg:'Feature createPhotoUserInDB:..'
    };
    try {
        const newPhotoUser = new PhotoUser({nombre,apellido,email,password});
        const resultCreateNewPhotoUser = await newPhotoUser.save();
        objRes = {
            ...objRes,
            resultCreateNewPhotoUser
        }
        return objRes
    } catch (error) {
        objRes= {
            ...objRes,
            error
        }
        return objRes
    }
}


export const getOnePhotoUserInDB = async(idPhotoUser)=>{
    let objRes = {
        msg: 'Feature getOnePhotoUserInDB..'
    }
  try {
    const dataPhotoUser = await PhotoUser.findById({_id:idPhotoUser});
    objRes={
        ...objRes,
        dataPhotoUser
    }
    return objRes
  } catch (error) {
    objRes = {
        ...objRes,
        error
    }
    return objRes
  }
}

export const confirmLoginPhotoUser= async({email,password})=>{
    
    let objRes= {
        msg:'Result Login:..',
        isConfirmLogin: false
    }
    try {
        const findDataPhotoUserByEmail = await PhotoUser.findOne({email:email});
        if (findDataPhotoUserByEmail){
            const confirmPassword = findDataPhotoUserByEmail.password;
            if (confirmPassword===password){
                isConfirmLogin=true;
                objRes={
                    ...objRes,
                    isConfirmLogin: true,
                    dataPhotoUser: findDataPhotoUserByEmail
                }
            } 
        }
        return objRes
    } catch (error) {
        objRes={
            ...objRes,
            error
        }
        return objRes
    }
}

export const registerNewPhotoUser = async({email,password,nombre})=>{
    const dataRegister = {
        email:email,
        password:password,
        nombre:nombre
    }
    try {
        const resultRegister = new PhotoUser(dataRegister);
        await resultRegister.save();
        
        return resultRegister
    } catch (error) {
        return error
    }
}