"use strict";
import dotenv from 'dotenv';
dotenv.config()
import 'yup-phone'
import bodyParser from 'body-parser';
import cros from 'cors';
import express from 'express';
import morgan from 'morgan';
import { handleErrorGlobal, handleSendError } from './middleware';
import routing from './routes';
// import "./config/redis"

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cros());
app.use(morgan("short"));

app.use(routing)
app.use(handleSendError);
app.use(handleErrorGlobal);
app.listen(port, () => {
  console.log("Server node running on PORT " + port);
  console.log(`V ENV ${process.env.NODE_ENV}`);
});

export default app
