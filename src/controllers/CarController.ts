import { Request, Response } from 'express';
import CarServices from '../services/CarService';

export default class CarController {
  private _service = new CarServices();

  public create = async (
    req: Request,
    res: Response,
  ) => {
    const requestBody = req.body;
    const newCar = await this._service.add({ ...requestBody });
    return res.status(201).json(newCar);
  };
}