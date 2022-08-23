import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarValidate from '../middlewares/CarValidate';

const carsRoutes = Router();
const carValidate = new CarValidate();
const carController = new CarController();

carsRoutes.post(
  '/',
  carValidate.emptyObject,
  carValidate.seatValidation,
  carValidate.doorsValidation,
  carValidate.atributesValidation1,
  carValidate.atributesValidation2,
  carController.create,
);

carsRoutes.get(
  '/',
  carController.getAll,
);

carsRoutes.get(
  '/:id',
  carValidate.validateMongdbId,
  carController.getById,
);

carsRoutes.delete(
  '/:id',
  carValidate.validateMongdbId,
  carController.deleteById,
);

carsRoutes.put(
  '/:id',
  carValidate.emptyObject,
  carValidate.validateMongdbId,
  carController.updateById,
);

export default carsRoutes;