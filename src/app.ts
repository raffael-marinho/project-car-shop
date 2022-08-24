import express from 'express';
import bodyParser from 'body-parser';
import carsRoutes from './routers/CarRouter';
import motorCycleRoutes from './routers/motorcycleRoutes';

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use('/cars', carsRoutes);
app.use('/motorcycles', motorCycleRoutes);
export default app;
