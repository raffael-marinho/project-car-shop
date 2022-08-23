import { Router } from 'express';
import CarController from '../controllers/CarController';

const carsRoutes = Router();
const carController = new CarController();

carsRoutes.post('/', carController.create);

export default carsRoutes;