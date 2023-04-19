
//Me devuelve todos los rollos
export const getAllRollos = (req,res)=>{
    return res.status(200).json("Me devuelve todos los rollos")
}

//Me crea un nuevo rollo en la base de datos
export const createRollo = (req,res)=>{
    return res.status(200).json("Me crea un nuevo rollo en la base de datos")
}

//Me devuelve los datos del rollo en especifico
export const getOneRollo = (req,res)=>{
    return res.status(200).json("Me devuelve los datos del rollo en especifico")
}

//Me permite editar un rollo 
export const editRollo = (req,res)=>{
    return res.status(200).json("Me permite editar un rollo")
}

//Elimina un rollo de la base de datos segun su id
export const deleteRollo = (req,res)=>{
    return res.status(200).json("Elimina un rollo de la base de datos segun su id")
}