import "reflect-metadata";
import { createConnection } from 'typeorm'
import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express()
const config: any = {
  "type": process.env.DB_DIALECT,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_NAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DEFAULT_DATABASE,
  "synchronize": true,
  "logging": false,
  "entities": [
     "src/entity/*"
  ],
  "migrations": [
     "src/migration/**/*.ts"
  ],
  "subscribers": [
     "src/subscriber/**/*.ts"
  ],
  "cli": {
     "entitiesDir": "src/entity",
     "migrationsDir": "src/migration",
     "subscribersDir": "src/subscriber"
  }
}


createConnection(config)

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})