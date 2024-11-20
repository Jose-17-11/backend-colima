import { Router } from "express";
import { read, register, update, deleted } from "../controller/dispositivo.controllers.js";

const router = Router()

router.get('/dispositivo', read)

router.post('/dispositivo', register)

router.put('/dispositivo', update)

router.delete('/dispositivo', deleted)

export default router