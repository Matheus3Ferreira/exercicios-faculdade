import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import routes from "./routes";
import cors from 'cors';

const app = express();
createConnection();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3333, () => { console.log(`🔥 Server on fire http://localhost:3333/`) })