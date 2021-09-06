import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { HttpException } from '../../../utils';

export default class PayloadUpdateDataV1 {
    static async buyer(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                name: yup.string(),
                email: yup.string().email(),
                fcmToken: yup.string()
            });

            const result = await schema.validate(req.body)
            if (Object.keys(result).length >= 5) {
                throw new HttpException(403, "your payload exceeds the limit")
            }
            req.body = result
            next()
        } catch (e) {
            e.code = 400;
            next(e)
        }
    }

    static async seller(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                partnerId: yup.number(),
                name: yup.string(),
                email: yup.string().email(),
                fcmToken: yup.string(),
                description: yup.string(),
                openTime: yup.string(),
                closeTime: yup.string()
            });

            const result = await schema.validate(req.body)

            if (Object.keys(result).length >= 9) {
                throw new HttpException(403, "your payload exceeds the limit")
            }
            req.body = result
            next()
        } catch (e) {
            e.code = 400;
            next(e)
        }
    }

    static async patner(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                name: yup.string(),
                email: yup.string().email(),
                fcmToken: yup.string(),
                description: yup.string()
            });

            const result = await schema.validate(req.body)
            if (Object.keys(result).length >= 6) {
                throw new HttpException(403, "your payload exceeds the limit")
            }
            req.body = result
            next()
        } catch (e) {
            e.code = 400;
            next(e)
        }
    }

    static async orders(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                userId: yup.number(),
                sellerId: yup.number(),
                time: yup.string(),
                price: yup.number(),
                productList: yup.string(),
                paymentMethode:yup.string(),
                orderStatus:yup.string(),
                paymentStatus:yup.string(),
                virtualAccount:yup.string()
            });

            const result = await schema.validate(req.body)
            if (Object.keys(result).length >= 10) {
                throw new HttpException(403, "your payload exceeds the limit")
            }
            req.body = result
            console.log(req.body)
            next()
        } catch (e) {
            e.code = 400;
            next(e)
        }
    }
}