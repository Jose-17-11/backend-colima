import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './routes/user.routes.js';
import dispositivosRoutes from './routes/dispositivo.routes.js';
import monitoreoRoutes from './routes/monitoreo.routes.js'
import auth from './routes/auth.routes.js'
import cookieParser from 'cookie-parser';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cookieParser()); 
app.use(cors())
app.use(express.json())
app.use(userRoutes)
app.use(dispositivosRoutes)
app.use(monitoreoRoutes)
app.use(auth)

app.listen(port, () => {
    console.log(`server running in port ${port}`);
});
