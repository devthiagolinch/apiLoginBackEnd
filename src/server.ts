import express from 'express';
import { sessionRoutes } from './routes/sessions.routes';
import { usersRoutes } from './routes/users.routes';

const app = express()

app.use(express.json())

app.use("/users", usersRoutes)

app.use("/sessions", sessionRoutes)

app.listen(3333, () => console.log("Server runing!"))