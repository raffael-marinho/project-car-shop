import IService from '../interfaces/IService';
import { ICar, carSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class Service implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const validCar = carSchema.safeParse(obj);
    if (!validCar.success) {
      throw validCar.error;
    }
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    const getAllCar = await this._car.read();
    if (!getAllCar) {
      throw new Error('not found');
    }
    return getAllCar;
  }

  public async readOne(_id:string):Promise<ICar> {
    if (_id.length < 24) throw new Error('Id must have 24 characters');

    const getCarById = await this._car.readOne(_id);

    if (!getCarById) throw new Error('invalid id');

    return getCarById;
  }

  public async update(_id:string, obj:ICar):Promise<ICar | null> {
    const validCar = carSchema.safeParse(obj);
    if (!validCar.success) {
      throw new Error('not found'); 
    }
    await this.readOne(_id);   
    return this._car.update(_id, obj);
  }

  public async delete(_id:string):Promise<ICar> {
    await this.readOne(_id); 
    const deleteCar = await this._car.delete(_id);
    if (!deleteCar) throw new Error('not found');
    return deleteCar;
  }
}

export default Service; 
