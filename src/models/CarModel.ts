import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carsMongooseSchema = new Schema<ICar>({
  
  seatsQty: Number,
  model: String,
  status: Boolean,
  buyValue: Number,
  year: Number,
  doorsQty: Number,
  color: String,
}, { versionKey: false });

class CarsModel extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Cars', carsMongooseSchema)) {
    super(model);
  }
}

export default CarsModel;