import PhotoUser from "../models/photoUser.model.js";
import bcrypt from 'bcrypt';


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
        
            const confirmPassword = await bcrypt.compare(password,findDataPhotoUserByEmail.password);
            if (confirmPassword){
                
                objRes={
                    ...objRes,
                    isConfirmLogin: true,
                    dataPhotoUser: findDataPhotoUserByEmail
                }
            } 
        }
        console.log(objRes);
        return objRes
    } catch (error) {
        objRes={
            ...objRes,
            error
        }
        console.log(objRes);
        return objRes
    }
}

export const registerNewPhotoUser = async({email,password,nombre})=>{
    const dataRegister = {
        email:email,
        password:password,
        nombre:nombre
    }
    let resultRegister= null;
    let objRes= {
        msg:'Registrando un usuario nuevo:..',
        isConfirmLogin:false
    };
    try {
        const hashPassword = await bcrypt.hash(dataRegister.password,10);
        if(hashPassword){
            dataRegister.password=hashPassword;
            resultRegister = new PhotoUser(dataRegister);
            await resultRegister.save();
            objRes= {
                ...objRes,
                isConfirmLogin:true,
                dataPhotoUser:resultRegister
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