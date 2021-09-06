const midtransClient = require('midtrans-client');

import { Request, Response, NextFunction } from 'express';
import { resSuccess } from '../../../constant';
import { HttpException } from '../../../utils';
import { infoOrders, createOrders, virtualAccount } from './dto'

const { Order} = require("../../../models");

let core = new midtransClient.CoreApi({
  isProduction : process.env.IS_PROD,
  serverKey : process.env.MIDTRANS_SERVER_KEY,
  clientKey : process.env.MIDTRANS_CLIENT_KEY
});

export default class infoOrder {
    static async order(req: Request, res: Response, next: NextFunction) {
      const body: infoOrders = {
        UserId: 1,
        time: "21-01-01",
        price: 50000
      }
      try {
          const result = await Order.findAll({ where: {userId: body.UserId} })
          if (!result) {
              throw new HttpException(403, "User tidak ditemukan")
          }
          resSuccess({ message: "Success get data user", data: result }, res)
      } catch (e) {
          next(e)
      }
    }

    static async createOrder(req: Request, res: Response, next: NextFunction) {
      const body: createOrders = {
        UserId: req.body.userId,
        sellerId: req.body.sellerId,
        time: "21-01-01",
        price: req.body.price,
        productList: req.body.productList,
        paymentMethode:req.body.paymentMethode,
        orderStatus:req.body.orderStatus,
        paymentStatus:req.body.paymentStatus,
        virtualAccount:req.body.virtualAccount
      }
      try {
          const result = await Order.create(body)
          if (!result) {
              throw new HttpException(500, "Internal server Error")
          } else{
            let parameter = {
              "payment_type": "bank_transfer",
              "transaction_details": {
                  "gross_amount": 24145,
                  "order_id": "test-transaction-321",
              },
              "bank_transfer":{
                  "bank": "bni"
              }
          };
          let midtrans = await core.charge(parameter)
          console.log(midtrans);
          resSuccess({ message: "Success get data user", data: result }, res)

          }

      } catch (e) {
          next(e)
      }
    }
}
