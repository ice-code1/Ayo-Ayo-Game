import { Request, Response, NextFunction } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, msg: "PAGE NOT FOUND" });
};

export default notFound;
