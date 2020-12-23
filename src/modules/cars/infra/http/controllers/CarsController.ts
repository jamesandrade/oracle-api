import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateCarService from '@modules/cars/services/CreateCarService';
import DestroyCarService from '@modules/cars/services/DestroyCarService';

export default class CarsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { mark, model } = req.body;

    const createCar = container.resolve(CreateCarService);

    const car = await createCar.execute({
      mark,
      model,
    });

    return res.json(classToClass(car));
  }

  // eslint-disable-next-line class-methods-use-this
  public async destroy(req: Request, res: Response): Promise<Response> {
    const car_id = req.params.id;

    const destroyCar = container.resolve(DestroyCarService);
    const car = await destroyCar.execute({ car_id });

    return res.status(200).json({ car });
  }
}
