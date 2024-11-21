import { Router } from "express";
import { getData} from '../controller/data.controllers.js'

const router = Router()

router.get('/data/:dispositivoId', getData)
// router.post('/data', createData)

export default router