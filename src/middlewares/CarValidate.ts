import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

const messageSeat = 'seatsQty is obrigatory';
const messageEmpty = 'Empty request';
const messageDoor = 'doorsQty is obrigatory';
const messageId = 'Id must have 24 hexadecimal characters';
const messageObj = 'Object not found';

export default class CarValidation {
  public emptyObject = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request = req.body;
    if (Object.keys(request).length === 0) {
      return res.status(400).json({ message: messageEmpty });
    }

    next();
  };

  public seatValidation = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { seatsQty } = req.body;

    if (!seatsQty) {
      return res.status(400).json({ message: messageSeat });
    }

    if (seatsQty < 2) {
      return res.status(400).json({ message: messageSeat });
    }

    next();
  };

  public doorsValidation = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { doorsQty } = req.body;

    if (!doorsQty) {
      return res.status(400).json({ message: messageDoor });
    }

    if (doorsQty < 2) {
      return res.status(400).json({ message: messageDoor });
    }

    next();
  };

  public atributesValidation1 = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { model, year, color } = req.body;

    if (!model || !year || !color) {
      return res.status(400).json({ message: messageSeat });
    }

    next();
  };

  public atributesValidation2 = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { buyValue, doorsQty, seatsQty } = req.body;

    if (!buyValue || !doorsQty || !seatsQty) {
      return res.status(400).json({ message: messageSeat });
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
    console.log({ isIdValid, id });

    if (id.length < 24) {
      return res.status(400)
        .json({ error: messageId });
    }

    if (!isIdValid) {
      return res.status(404)
        .json({ error: messageObj });
    }

    next();
  };
}