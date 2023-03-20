import { rateLimit } from 'express-rate-limit';

export const limiter = rateLimit({
  max: 10,
  windowMs: 60000,
  standardHeaders: true,
});
