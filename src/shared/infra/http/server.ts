/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';
import AppError from '@shared/errors/AppError';
import routes from './routes';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  // eslint-disable-next-line
  console.error(err);
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

// eslint-disable-next-line @typescript-eslint/no-var-requires

// eslint-disable-next-line func-names
app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
