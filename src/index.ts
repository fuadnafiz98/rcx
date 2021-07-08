import app from "./app";
import logger from "loglevel";

logger.setLevel("info");

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server listening on http://${HOST}:${PORT}`);
});
