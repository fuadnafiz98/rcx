import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import { errors } from "celebrate";
import helmet from "helmet";
import api from "./api";
import errorHandler from "./middlewares/errorHandler";
import limiter from "./middlewares/rateLimiter";
import notFound from "./middlewares/notFound";

const app = express();

app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "welcome to the backed!!",
  });
});

app.use("/api", api);

app.use(notFound);
app.use(errorHandler);
app.use(errors());

export default app;
