import express from 'express';
import * as car from './car';

const apiVersion = process.env.API_VERSION || 'v1';

export default function (app) {
  const router = express.Router();
  router.use(`/api/${apiVersion}/data`, car.getCar);

  app.use('/', router);
}
