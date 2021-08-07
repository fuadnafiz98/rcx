import { Router } from "express";

import runController from "./run.controller";

const router = Router();

router.get("/", runController.checkHealth);
router.post("/c", runController.runGCC);
router.post("/cpp", runController.runCPP);
router.post("/javascript", runController.runNodejs);
router.post("/python", runController.runPython);

export default router;
