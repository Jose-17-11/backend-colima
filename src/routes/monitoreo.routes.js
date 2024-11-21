import { Router } from "express";
import { insertarMonitoreo } from "../controller/monitoreo.controlles.js";

const router = Router();

router.post('/monitoreo', insertarMonitoreo)

export default router