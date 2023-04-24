import express from "express";
import { routes } from "./routes/index.js";
import cors from 'cors';
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const app = express();
export const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(cors());
//app.use("/api/", routes);
routes();
