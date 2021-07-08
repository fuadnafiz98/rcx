import { Request, Response, NextFunction } from "express";
import logger from "loglevel";

interface Error {
  status?: number;
  name?: string;
  message?: string;
  stack?: any;
  errors?: any;
}

function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  console.log(`Handling error from ErrorHandler`);

  if(res.headersSent) {
    next(error);
  } else {
    logger.error(error);
    const statusCode = req.statusCode;
    res.status(statusCode || 500);
    res.json({
      status: statusCode,
      message: error.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
      errors: error.errors || undefined,
    });
  }
}

export default errorHandler;
