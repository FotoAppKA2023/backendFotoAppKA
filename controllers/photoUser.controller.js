//Controladores de la Entidad photoUser


//(index) devuelve la lista de usuarios
export const getIndex = (req,res)=>{
    return res.status(200).json("Devuelve la lista de usuarios Fotografo..");
}

//Me crea un registro de usuario
export const createPhotoUser = (req,res)=>{
    return res.status(200).json("Creando usuario Fotografo..");
}

//Obtener un usuario por ID
export const getOnePhotoUser = (req,res)=>{
    return res.status(200).json("Recuperando data de usuario Fotografo..");
}

//Me actualiza un usuario existente por ID
export const updatePhotoUser = (req,res)=>{
    return res.status(200).json("Actualizando usuario fotografo..")
}

//Me permite borrar un usuario por ID
export const deletePhotoUser = (req,res)=>{
    return res.status(200).json("Actualizando usuario fotografo..")
}
