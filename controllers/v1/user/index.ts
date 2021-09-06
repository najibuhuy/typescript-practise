import { Request, Response, NextFunction } from 'express';
import { resSuccess } from '../../../constant';
import { HttpException } from '../../../utils';
import { infoUsers } from './dto'

const { User} = require("../../../models");

export default class infoUser {

  static async user(req: Request, res: Response, next: NextFunction) {
    const body: infoUsers = {
      firstName: "najib",
      lastName: "Doe",
      email: "example@example.com"
    }
    try {
        const result = await User.findAll({ where: body })
        if (!result) {
            throw new HttpException(403, "User tidak ditemukan")
        }

        resSuccess({ message: "Success get data user", data: result }, res)

    } catch (e) {
        next(e)
    }
  }
}
