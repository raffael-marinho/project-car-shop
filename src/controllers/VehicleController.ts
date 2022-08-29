import { Request, Response } from 'express';

import CarServices from '../services/VehicleService';

const objectNotFound = 'Object not found';

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

  public getAll = async (
    _req: Request,
    res: Response,
  ) => {
    const allCars = await this._service.getAll();
    return res.status(200).json(allCars);
  };

  public getById = async (
    req: Request,
    res: Response,
  ) => {
    const { id } = req.params;
    const oneCar = await this._service.getById(id);
    if (oneCar === null) {
      return res.status(404).json({ error: objectNotFound });
    }
    return res.status(200).json(oneCar);
  };

  public deleteById = async (
    req: Request,
    res: Response,
  ) => {
    const { id } = req.params;
    const oneCar = await this._service.deleteById(id);

    if (oneCar === null) {
      return res.status(404).json({ error: objectNotFound });
    }
    return res.status(204).json();
  };

  public updateById = async (
    req: Request,
    res: Response,
  ) => {
    const { id } = req.params;
    const requestBody = req.body;
    const updatedMoto = await this._service.updateById(id, { ...requestBody });

    if (updatedMoto === null) {
      return res.status(404).json({ error: objectNotFound });
    }
    return res.status(200).json(updatedMoto);
  };
}