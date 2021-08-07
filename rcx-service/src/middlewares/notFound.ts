import { Request, Response, NextFunction } from "express";

function notFound(req: Request, res: Response, next: NextFunction) {
  console.log(`not found error`);
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

export default notFound;
