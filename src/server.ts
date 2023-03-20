import { routes } from './routes';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internnal server error',
    });
  }
);

app.listen(3333);

export default app;
