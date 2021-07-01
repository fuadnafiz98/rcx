import express, { Request, Response } from "express";

import run from "./run/run.router";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  res.json({
    message: "well, wellcome to the backed api",
  });
});

router.use("/run", run);

export default router;
