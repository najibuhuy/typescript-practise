import { NextFunction, Response, Request } from "express";
import { HttpException } from "../utils";
import { resError } from "../constant";

export const handleSendError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new HttpException(404, "Not Found");
  next(error);
};

export const handleErrorGlobal = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  resError({ code: error.code || 500, message: error.message, data: error.data }, res);
  res.end();
};
