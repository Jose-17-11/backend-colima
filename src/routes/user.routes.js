import { Router } from "express";
import { read, logueo, register } from "../controller/user.controllers.js";

const router = Router()

router.get('/user/:userId', read)

router.post('/user', logueo)

router.post('/register', register)

export default router