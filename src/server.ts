import 'reflect-metadata'
import express from 'express';
import cors from 'cors'
import { usersRoutes } from './routes/users.routes';


import './database'
import './shared/container'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/users", usersRoutes)

app.listen(3332, () => console.log("Server runing!"))