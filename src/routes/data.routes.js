import { Router } from "express";
import { getData, createData} from '../controller/data.controllers.js'

const router = Router()

router.get('/data', getData)
router.post('/data', createData)