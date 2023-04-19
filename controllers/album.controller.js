// controladores de la Entidad album


//Devuelve la lista de albumes de todos los usuarios
export const getAllAlbumes = (req,res)=>{
    return res.status(200).json("Devuelve la lista de albumes de todos los usuarios")
}

//Me crea un registro de album, y me devuelve el registro del album creado
export const createAlbum = (req,res)=>{
    return res.status(200).json("Me crea un registro de album, y me devuelve el registro del album creado")
}

//Me devuelve la lista de albums del usuario
export const getMyAlbums = (req,res)=>{
    return res.status(200).json("Recupera los Albumes de un Usuario Fotografo:..")
}

//Recupera el album especificado
export const getOneAlbum = (req,res)=>{
    return res.status(200).json("Recupera un Album por id ..")
}

//Actualiza un album
export const updateAlbum = (req,res)=>{
    return res.status(200).json("Actualiza un Album por id ..")
}

//Elimina un album
export const deleteAlbum = (req,res)=>{
    return res.status(200).json("Elimina un Album por id ..")
}