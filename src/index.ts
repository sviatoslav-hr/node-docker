import express, { Express, Request, Response } from 'express';
import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3003;
const ENV = process.env.NODE_ENV || 'development';
const app: Express = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

app.listen(PORT, () => {
  console.log(
    '\x1b[32m',
    `Running on port http://localhost:${PORT} in ${ENV} mode⚡`,
    '\x1b[37m',
  );
});
