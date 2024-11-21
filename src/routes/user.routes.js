import { Router } from "express";
import { read, logueo, register, update, deleted } from "../controller/user.controllers.js";

const router = Router()

router.get('/user/:userId', read)

router.post('/user', logueo)

router.post('/register', register)

router.put('/user', update)

router.delete('/user', deleted)

export default router