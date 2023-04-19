//Controladores de la Entidad photoUser


//(index) devuelve la lista de usuarios
export const getIndex = (req,res)=>{
    return res.status(200).json("Devuelve la lista de usuarios Fotografo..");
}

//Me crea un registro de usuario
export const createUser = (req,res)=>{
    return res.status(200).json("Creando usuario Fotografo..");
}