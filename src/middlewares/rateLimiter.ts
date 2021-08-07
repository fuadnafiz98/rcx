import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import Redis from "ioredis";

const client = new Redis();

const limiter = rateLimit({
  store: new RedisStore({
    client: client,
  }),
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // limit each IP Address to 100 requests.
});

export default limiter;
