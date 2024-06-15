import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser'; // body parsing middleware

const PORT = process.env.PORT || 3000;

const app = express();

// middleware to parse json data in body
app.use(json());

app.get('/', (req: Request, res: Response) => {
  console.log('GET /');
  res.send('Hello World with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
