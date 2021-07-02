import express, { Router } from "express";

import runController from "./run.controller";

const router = Router();

router.get("/", runController.checkHealth);
router.post("/gcc", runController.runGCC);
router.post("/cpp", runController.runCPP);
router.post("/node", runController.runNodejs);
router.post("/python", runController.runPython);

export default router;
