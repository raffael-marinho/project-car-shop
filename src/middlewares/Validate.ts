import { ErrorRequestHandler } from 'express';

const errorMessage = (errorMsg: string):{ status: number, message: string } => {
  switch (errorMsg) {
    case 'Id must have 24 characters':
      return { status: 400, message: 'Id must have 24 hexadecimal characters' };
      break;
    case 'invalid id':
      return { status: 404, message: 'Object not found' };
      break;
    case 'not found':
      return { status: 400, message: 'Not found' };
      break;
    default: return { status: 500, message: 'Internal Server Error' };
      break;
  }
};

const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  const { status, message } = errorMessage(error.message);
  return res.status(status).json({ error: message });
};

export default errorMiddleware;