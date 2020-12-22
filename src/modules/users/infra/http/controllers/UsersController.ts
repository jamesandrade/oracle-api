import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';
import DestroyUserService from '@modules/users/services/DestroyUserService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      telefone,
    } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      telefone,
    });

    return res.json(classToClass(user));
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    const user_id = req.params.id;

    const destroyUser = container.resolve(DestroyUserService);
    const user = await destroyUser.execute({ user_id });

    return res.status(200).json({ user });
  }
}
