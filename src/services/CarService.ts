import { ICar } from '../interfaces/ICar';
import Car from '../models/CarModel';

export default class CarServices {
  private carModel = new Car();

  public add = async (newCar: ICar) => this.carModel.create(newCar);
}