// controladores de la Entidad album


//Devuelve la lista de albumes de todos los usuarios
export const getAllAlbumes = (req,res)=>{
    return res.status(200).json("Devuelve la lista de albumes de todos los usuarios")
}

//Me crea un registro de album, y me devuelve el registro del album creado
export const createAlbum = (req,res)=>{
    return res.status(200).json("Me crea un registro de album, y me devuelve el registro del album creado")
}