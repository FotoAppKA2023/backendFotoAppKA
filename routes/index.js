import { app } from "../app.js";
import { adminUserRoutes } from "./adminUser.routes.js";
import { albumRoutes } from "./album.routes.js";
import { camarasRoutes } from "./camaras.routes.js";
import { photoUserRoutes } from "./photoUser.routes.js";
import { rollosRoutes } from "./rollos.routes.js";
import { scanersRoutes } from "./scaners.routes.js";

export const routes = () => {
  

  app.use("/api/photoUser", photoUserRoutes);
  app.use("/api/albums", albumRoutes);
  app.use("/api/adminUser", adminUserRoutes);
  app.use("/api/rollos", rollosRoutes);
  app.use("/api/camaras", camarasRoutes);
  app.use("/api/scaners", scanersRoutes);
  
  //ruta de saludo...
  app.use("/", (req, res) => {
    res.json("Welcome to Backend FotoAppKodemia KA:..");
  });
};
