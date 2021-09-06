import express from 'express';
import { user } from '../../controllers';
const app = express.Router();

// info saldo
app.get('/info', user.user)

export default app