import { Request, Response, NextFunction } from "express";

interface ICustomError extends Error {
  statusCode: number;
}

const errorHandler = (
  err: ICustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) return next(err);
  const customObj = {
    errorMessage: err.message || "INTERNAL SERVER ERROR.",
    errorCode: err.statusCode || 500,
  };

  res
    .status(customObj.errorCode)
    .json({ success: false, msg: customObj.errorMessage });
};

export default errorHandler;
