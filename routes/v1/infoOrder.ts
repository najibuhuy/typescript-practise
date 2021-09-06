import express from 'express';
import { order } from '../../controllers';
const app = express.Router();
import { PayloadUpdateDataV1 } from '../../middleware'

// info saldo
app.get('/info', order.order)
app.post('/create', PayloadUpdateDataV1.orders, order.createOrder)

export default app