import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

const messageEmpty = 'Empty request';
const categoryObrigatory = 'category is obrigatory';
const categoryString = 'category must be a string';
const engineObrigatory = 'engieCapacity is obrigatory';
const invalidIdMessage = 'Id must have 24 hexadecimal characters';
const objectNotFound = 'Object not found';
const engineValue = 'engieCapacity must be a number between 0 and 2500';
const motorcycleMissingKeys = `please provide keys:
model, year, color and buuValue`;
export default class MotorcycleValidate {
  public emptyObject = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request = req.body;
    if (!request || Object.keys(request).length === 0) {
      return res.status(400).json({ message: messageEmpty });
    }

    next();
  };

  private categoryEnumValidate = (category: string) =>
    category === 'Street' || category === 'Custom' || category === 'Trail'
  ;

  public categoryValidate = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ message: categoryObrigatory });
    }
    if (typeof category !== 'string') {
      return res.status(400).json({ message: categoryString });
    }
    if (!this.categoryEnumValidate(category)) {
      return res.status(400).json({ message: categoryString });
    }

    next();
  };

  public engineValidate = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { engineCapacity } = req.body;

    if (!engineCapacity) {
      return res.status(400).json({ message: engineObrigatory });
    }
    if (typeof engineCapacity !== 'number') {
      return res.status(400).json({ message: engineValue });
    }
    if (engineCapacity < 0 || engineCapacity > 2500) {
      return res.status(400).json({ message: engineValue });
    }

    next();
  };

  public atributesValidate = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { buyValue, model, year, color } = req.body;

    if (!buyValue || !model || !year || !color) {
      return res.status(400).json({ message: motorcycleMissingKeys });
    }

    next();
  };

  public validateMongdbId = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;
    const isIdValid = isValidObjectId(id);

    if (id.length < 24) {
      return res.status(400)
        .json({ error: invalidIdMessage });
    }

    if (!isIdValid) {
      return res.status(404)
        .json({ error: objectNotFound });
    }

    next();
  };
}