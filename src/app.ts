import express, { Application, Request, Response, NextFunction } from 'express';
import { appendFile } from 'fs';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(3003, () => {
    console.log('Server is running on http://localhost:3003');
});
