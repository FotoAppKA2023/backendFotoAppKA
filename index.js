import { app } from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db/db.js";



connectDB();

app.listen(PORT);

console.log("Server is running on port:", PORT); 



//await myS3PutObject();

//await putCorsPolicy();

//version base del backend
//iniciamos con la rama dev
//agregando archivo config y configuracion de la db