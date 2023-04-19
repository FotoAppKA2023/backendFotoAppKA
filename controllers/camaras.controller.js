//Me devuelve todas los camaras
export const getAllCamara = (req,res)=>{
    return res.status(200).json("Me devuelve todas los camaras")
}

//Me crea un nuevo camara en la base de datos
export const createCamara = (req,res)=>{
    return res.status(200).json("Me crea una nueva camara en la base de datos")
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