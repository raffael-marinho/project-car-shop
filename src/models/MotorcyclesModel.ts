import { Schema, model as mongooseModel } from 'mongoose';
import GenericModel from './MongoModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, {
  versionKey: false,
});

export default class Motorcycle extends GenericModel<IMotorcycle> {
  constructor(model = mongooseModel('Motorcycle', motorcycleMongooseSchema)) {
    super(model);
  }
}