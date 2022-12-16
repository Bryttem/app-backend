import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
const Port =  process.env.Port || 3001
const app = express();
app.use(cors());
app.use(router);
db().then(() => console.log("Conexion Ready"));
app.listen(Port, () => console.log(`Listo en el puerto ${Port}`))