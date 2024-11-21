import { Router } from "express";
import { read, register } from "../controller/dispositivo.controllers.js";

const router = Router()

router.get('/dispositivo/:userId', read)

router.post('/dispositivo', register)

export default router