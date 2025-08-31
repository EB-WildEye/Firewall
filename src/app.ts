import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import firewallRouter from './routes/index';
import { config } from './config/env';

const app: Application = express();

app.use(express.json()); 
app.use('/api/firewall', firewallRouter); 

app.get('/', (req: Request, res: Response) => {
    res.send('Server is up and running!');
});

app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});
