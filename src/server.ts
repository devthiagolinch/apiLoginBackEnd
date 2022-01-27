import express from 'express';
import cors from 'cors'
import { usersRoutes } from './routes/users.routes';

const app = express()

app.use(express.json())
app.use(cors())

app.use("/users", usersRoutes)

app.listen(3333, () => console.log("Server runing!"))