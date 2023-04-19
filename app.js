import express from "express";
import { routes } from "./routes/index.js";
import cors from 'cors';

export const app = express();

app.use(cors());
//app.use("/api/", routes);
routes();
