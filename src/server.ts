import express, { Request, Response, NextFunction } from 'express';

import { json } from 'body-parser'; // body parsing middleware
import morgan from 'morgan'; // HTTP request logger middleware

const PORT = Number(process.env.PORT || 3000);

const app = express();

// middleware to parse json data in body
app.use(json());

// morgan middleware to provide detailed information about each request.
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.json('Hello World with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
