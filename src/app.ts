import express from 'express';
import bodyParser from 'body-parser';
import carsRoutes from './routers/CarRouter';
import motorCycleRoutes from './routers/motorcycleRoutes';
import errorMiddleware from './middlewares/Validate';

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use('/cars', carsRoutes);
app.use('/motorcycles', motorCycleRoutes);

app.use(errorMiddleware);
export default app;
