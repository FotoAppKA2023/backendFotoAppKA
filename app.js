import express from "express";
import { routes } from "./routes/routes.js";
import cors from 'cors';

export const app = express();

app.use("/api/", routes);
app.use(cors());