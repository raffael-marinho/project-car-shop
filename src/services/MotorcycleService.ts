import { IMotorcycle } from '../interfaces/IMotorcycle';
import Motorcycle from '../models/MotorcyclesModel';

export default class MotorcycleServices {
  private motorcycleModel = new Motorcycle();

  public add = async (
    newMotorcycle: IMotorcycle,
  ) => this.motorcycleModel.create(newMotorcycle);

  public getAll = async () => this.motorcycleModel.read();

  public getById = async (id: string) => this.motorcycleModel.readOne(id);

  public deleteById = async (id: string) => this.motorcycleModel.delete(id);

  public updateById = async (
    id: string,
    moto: IMotorcycle,
  ) => this.motorcycleModel.update(id, { ...moto });
}