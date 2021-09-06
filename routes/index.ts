import express from 'express';
import { infoOrder, infoUser } from './v1';
// import { authorization } from '../middleware'

const app = express.Router();

// app.use(authorization)
app.use('/order/v1', infoOrder)
app.use('/user/v1', infoUser)

export default app