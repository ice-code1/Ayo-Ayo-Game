import { Request, Response, NextFunction } from "express";

type callback = (req: Request, res: Response, next: NextFunction) => any;

const asyncWrapper = (fn: callback) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: Error) => next(err));
  };
};

export default asyncWrapper;
