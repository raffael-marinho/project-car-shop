import { Router } from 'express';
import CarController from '../controllers/VehicleController';
import CarValidation from '../middlewares/CarValidate';

const carsRoutes = Router();
const carValidation = new CarValidation();
const carController = new CarController();

carsRoutes.post(
  '/',
  carValidation.emptyObject,
  carValidation.seatValidation,
  carValidation.doorsValidation,
  carValidation.atributesValidation1,
  carValidation.atributesValidation2,
  carController.create,
);

carsRoutes.get(
  '/',
  carController.getAll,
);

carsRoutes.get(
  '/:id',
  carValidation.validateMongdbId,
  carController.getById,
);

carsRoutes.delete(
  '/:id',
  carValidation.validateMongdbId,
  carController.deleteById,
);

carsRoutes.put(
  '/:id',
  carValidation.emptyObject,
  carValidation.validateMongdbId,
  carController.updateById,
);

export default carsRoutes;