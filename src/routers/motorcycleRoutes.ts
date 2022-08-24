import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleValidate from '../middlewares/motorcycleValidation';

const motorCycleRoutes = Router();
const motorcycleValidate = new MotorcycleValidate();
const motorcycleController = new MotorcycleController();

motorCycleRoutes.post(
  '/',
  motorcycleValidate.emptyObject,
  motorcycleValidate.categoryValidate,
  motorcycleValidate.engineValidate,
  motorcycleValidate.atributesValidate,
  motorcycleController.create,
);

motorCycleRoutes.get(
  '/',
  motorcycleController.getAll,
);

motorCycleRoutes.get(
  '/:id',
  motorcycleValidate.validateMongdbId,
  motorcycleController.getById,
);

motorCycleRoutes.delete(
  '/:id',
  motorcycleValidate.validateMongdbId,
  motorcycleController.deleteById,
);

motorCycleRoutes.put(
  '/:id',
  motorcycleValidate.emptyObject,
  motorcycleValidate.categoryValidate,
  motorcycleValidate.engineValidate,
  motorcycleValidate.atributesValidate,
  motorcycleValidate.validateMongdbId,
  motorcycleController.updateById,
);

export default motorCycleRoutes;