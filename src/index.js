import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './routes/user.routes.js';
import auth from './routes/auth.routes.js'

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors())
app.use(express.json())
app.use(auth)
app.use(userRoutes)

app.listen(port, () => {
    console.log(`server running in port ${port}`);
});
