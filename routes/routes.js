import { Router } from "express";

export const routes = Router();

//ruta de saludo...
routes.get("/", (req, res) => {
    res.json("Welcome to Backend FotoAppKodemia KA:..");
  });