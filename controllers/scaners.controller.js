
//Me devuelve todos los scaners
export const getAllScaner = (req,res)=>{
    return res.status(200).json("Me devuelve todos los scaners")
}

//Me crea un nuevo scaner en la base de datos
export const createScaner = (req,res)=>{
    return res.status(200).json("Me crea un nuevo scaner en la base de datos")
}

//Me devuelve los datos del scaner en especifico
export const getOneScaner = (req,res)=>{
    return res.status(200).json("Me devuelve los datos del scaner en especifico")
}

//Me permite editar un scaner 
export const editScaner = (req,res)=>{
    return res.status(200).json("Me permite editar un scaner")
}

//Elimina un scaner de la base de datos segun su id
export const deleteScaner = (req,res)=>{
    return res.status(200).json("Elimina un scaner de la base de datos segun su id")
}