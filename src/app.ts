import express from 'express';
import cors from 'cors';
import routes from './Routers';
import authorise from './Middleware/AuthoriseMiddleware';

const app = express();

app.use(cors());

app.use('/internal', authorise, routes); 

export default app;
