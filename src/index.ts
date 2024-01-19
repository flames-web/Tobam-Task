import express, { NextFunction, Request, Response } from 'express';
import { connectDB } from './database/database';
import dotenv from 'dotenv';
import router from './routes/image';
import AppError from './services/AppError';

dotenv.config();
connectDB();

const app = express();

app.use('/', router);
app.get('/', (req, res) => {
  res.send('Hello Tobams Groups. This Raji Olalekan Node js Task');
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError('Page Not Found', 404);
  next(error);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const status = (err as AppError).status || 500;

  const message = err.message || 'Something went wrong';

  res.status(status).json({
    status,
    message,
  });
});

app.listen(3000, () => {
  console.log('App Listening on port 3000');
});
