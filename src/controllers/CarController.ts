import { Request, Response, NextFunction } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class Controller {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>) {
    try {
      const createCar = await this._service.create(req.body);
      return res.status(201).json(createCar);
    } catch (error) {
      return res.status(400).end();
    }
  }

  public async read(req: Request, res: Response<ICar[]>) {
    try {
      const getAllCar = await this._service.read();
      return res.status(200).json(getAllCar);
    } catch (error) {
      return res.status(400).end();
    }
  }

  public async readOne(
    req: Request,
    res: Response<ICar | null>,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const getCarById = await this._service.readOne(id);    
      return res.status(200).json(getCarById);
    } catch (error) {
      next(error);
    }
  }

  public async update(
    req: Request,
    res: Response<ICar | null>,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const updateCar = await this._service.update(id, req.body);    
      return res.status(200).json(updateCar);
    } catch (error) {
      next(error);
    }
  }

  public async delete(
    req: Request,
    res: Response<ICar | null>,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const deleteCar = await this._service.delete(id);    
      return res.status(204).json(deleteCar);
    } catch (error) {
      next(error);
    }
  }
}

export default Controller; 
