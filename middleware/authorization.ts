import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { HttpException } from '../utils';

interface TokenJwt {
    id: number
    iat: number
}

const authorization = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization

    try {
        if (authToken) {
            const token: string[] = authToken.split(" ");
            const key: string = String(process.env.JWT_KEY);

            if (token[0] !== "Bearer") {
                throw new HttpException(401, "invalid type token")
            }

            const result = jwt.verify(token[1], key) as TokenJwt;
            req.body.id = result.id
            next()
        } else {
            throw new HttpException(401, "invalid token")
        }

    } catch (e) {
        e.code = 401
        next(e)
    }
}

export default authorization;