import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default abstract class GenericModel<T> implements IModel<T> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(objToCreate: T): Promise<T> {
    return this._model.create({ ...objToCreate });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error('InvalidMongoId');

    return this._model.findOne({ id });
  }

  public async update(id: string, objToupdate: Partial<T>): Promise<T | null> {
    return this._model.findByIdAndUpdate(
      { id },
      { ...objToupdate },
      { new: true },
    );
  }

  public async delete(id: string): Promise<T | null> {
    return this._model.findByIdAndDelete({ id });
  }
}