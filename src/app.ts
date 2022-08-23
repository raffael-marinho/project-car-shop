import express from 'express';
import bodyParser from 'body-parser';
import carsRoutes from './routers/CarRouter';

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use('/cars', carsRoutes);

export default app;
