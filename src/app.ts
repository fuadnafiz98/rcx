import express from "express";
import api from "./api";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errors } from "celebrate";
import errorHandler from "./middlewares/errorHandler";
import notFound from "./middlewares/notFound";

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

app.use(notFound);
app.use(errorHandler);
app.use(errors());

export default app;
