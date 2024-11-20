import { Router } from "express";
import { read, create, update, deleted } from "../controller/user.controllers.js";

const router = Router()

router.get('/user',read)

router.post('/user', create)

router.put('/user', update)

router.delete('/user', deleted)

export default router