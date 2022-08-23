import { NextFunction, Request, Response } from 'express';

const messageSeat = 'seatsQty is obrigatory';
const messageEmpty = 'Empty request';
const messageDoor = 'doorsQty is obrigatory';
export default class Carvalidate {
  public emptyObject = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request = req.body;
    if (!request) {
      return res.status(400).json({ message: messageEmpty });
    }

    next();
  };

  public seatvalidate = (
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

  public doorsvalidate = (
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

  public atributesvalidate1 = (
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

  public atributesvalidate2 = (
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
}