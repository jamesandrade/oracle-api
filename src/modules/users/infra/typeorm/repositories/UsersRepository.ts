import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '@modules/users/infra/typeorm/entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async findByTelefone(telefone: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { telefone },
    });

    return user;
  }

  public async findByCpf(cpf: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { cpf },
    });

    return user;
  }

  

  public async create({
    name,
    email,
    telefone,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      telefone,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async destroy(user_id: string): Promise<string> {
    this.ormRepository.delete(user_id);
    return user_id;
  }

  public async count(): Promise<number> {
    const numberOfUsers = await this.ormRepository.count();
    return numberOfUsers;
  }
}
export default UsersRepository;
