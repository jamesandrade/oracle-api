import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import carsRouter from '@modules/cars/infra/http/routes/cars.routes';
import purchasesRouter from '@modules/purchases/infra/http/routes/purchases.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/cars', carsRouter);
routes.use('/purchases', purchasesRouter);

export default routes;
