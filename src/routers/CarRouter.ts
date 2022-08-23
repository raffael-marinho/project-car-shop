import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarValidate from '../middlewares/CarValidate';

const carsRoutes = Router();
const carvalidate = new CarValidate();
const carController = new CarController();

carsRoutes.post(
  '/',
  carvalidate.emptyObject,
  carvalidate.seatvalidate,
  carvalidate.doorsvalidate,
  carvalidate.atributesvalidate1,
  carvalidate.atributesvalidate2,
  carController.create,
);

export default carsRoutes;