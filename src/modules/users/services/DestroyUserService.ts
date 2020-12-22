import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class DestroyUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<string> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }
    const id = await this.usersRepository.destroy(user_id);
    return id;
  }
}

export default DestroyUserService;
