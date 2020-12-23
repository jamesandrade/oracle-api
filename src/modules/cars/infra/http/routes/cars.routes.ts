import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CarsController from '@modules/cars/infra/http/controllers/CarsController';

const carsRouter = Router();
const carsController = new CarsController();

carsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      mark: Joi.string().required(),
      model: Joi.string(),
    },
  }),
  carsController.create,
);

carsRouter.delete('/:id', carsController.destroy);

export default carsRouter;
