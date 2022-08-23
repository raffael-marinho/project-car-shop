import { ICar } from '../interfaces/ICar';
import Car from '../models/CarModel';

export default class CarServices {
  private carModel = new Car();

  public add = async (newCar: ICar) => this.carModel.create(newCar);
  public getAll = async () => this.carModel.read();
  public getById = async (id: string) => this.carModel.readOne(id);
  public deleteById = async (id: string) => this.carModel.delete(id);
  public updateById = async (
    id: string,
    car: ICar,
  ) => this.carModel.update(id, { ...car });
}