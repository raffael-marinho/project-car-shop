import { Router } from 'express';
import Controller from '../controllers/CarController';
import Model from '../models/CarModel';
import Service from '../services/CarService';

const carRouter = Router();

const model = new Model();
const service = new Service(model);
const controller = new Controller(service);

carRouter.post('/', (req, res) => controller.create(req, res));
carRouter.get('/', (req, res) => controller.read(req, res));
carRouter.get('/:id', (req, res, next) => controller.readOne(req, res, next));
carRouter.put('/:id', (req, res, next) => controller.update(req, res, next));
carRouter.delete('/:id', (req, res, next) => controller.delete(req, res, next));

export default carRouter;