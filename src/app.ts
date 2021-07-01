import express, { Request, Response, NextFunction, Errback } from "express";
import api from "./api";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errors } from "celebrate";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "welcome to the backed!!"
  });
});

app.use("/api", api);

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(404).json({ message: err });
});

// app.use(notFound);
// app.use(errorHandler);
app.use(errors());

export default app;
