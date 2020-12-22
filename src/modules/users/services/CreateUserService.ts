import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  name: string;
  email?: string;
  telefone: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    telefone,
  }: IRequest): Promise<User> {
    let checkUserExists;
    if (email) {
      checkUserExists = await this.usersRepository.findByEmail(email);
    }

    if (checkUserExists) {
      throw new AppError('Este email já se encontra em uso');
    }

    checkUserExists = await this.usersRepository.findByTelefone(telefone);

    if (checkUserExists) {
      throw new AppError('Este telefone já se encontra em uso');
    }

    const user = await this.usersRepository.create({
      name,
      email,
      telefone,
    });

    return user;
  }
}

export default CreateUserService;
