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