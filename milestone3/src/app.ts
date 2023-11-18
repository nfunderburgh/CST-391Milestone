import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import prayersRouter from './prayers/prayers.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';


require('dotenv').config({path:__dirname+'/../.env'})

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());

if (process.env.NODE_ENV == 'development'){
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Prayer Requests</h1>');
});

app.use('/', [prayersRouter]);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});