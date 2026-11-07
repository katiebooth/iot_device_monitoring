import express from 'express';
import cors from 'cors';
import routes from './Routers';
import routesInternal from './routesInternal';
import authorise from './Middleware';

const app = express();

app.use(cors());

app.get('/internal', authorise, routes);

export default app;
