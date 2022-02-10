import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
  // const teste = '';
  return response.json({ message: 'Hello World1' });
});

app.listen(3333, () => console.log('Server is running!'));
