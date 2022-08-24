import { Request, Response } from 'express';
import MotorcycleServices from '../services/MotorcycleService';

const objectNotFound = 'Object not found';

export default class MotorcycleController {
  private _service = new MotorcycleServices();

  public create = async (
    req: Request,
    res: Response,
  ) => {
    const requestBody = req.body;
    const newMoto = await this._service.add({ ...requestBody });
    return res.status(201).json(newMoto);
  };

  public getAll = async (
    _req: Request,
    res: Response,
  ) => {
    const allMotos = await this._service.getAll();
    return res.status(200).json(allMotos);
  };

  public getById = async (
    req: Request,
    res: Response,
  ) => {
    const { id } = req.params;
    const oneMoto = await this._service.getById(id);
    if (oneMoto === null) {
      return res.status(404).json({ error: objectNotFound });
    }
    return res.status(200).json(oneMoto);
  };

  public deleteById = async (
    req: Request,
    res: Response,
  ) => {
    const { id } = req.params;
    const oneMoto = await this._service.deleteById(id);

    if (oneMoto === null) {
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