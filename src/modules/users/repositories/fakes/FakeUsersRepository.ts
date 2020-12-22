import { uuid } from 'uuidv4';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';

import User from '@modules/users/infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.user_id === id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async findByTelefone(telefone: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.telefone === telefone);

    return findUser;
  }

  public async findByCpf(cpf: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.cpf === cpf);

    return findUser;
  }

  public async findAllProviders({
    execept_user_id,
  }: IFindAllProvidersDTO): Promise<User[]> {
    let { users } = this;

    if (execept_user_id) {
      users = this.users.filter(user => user.user_id !== execept_user_id);
    }

    return users;
  }

  public async create({
    name,
    email,
    telefone,
    password,
    cpf,
    company_id,
    level_user,
    allowed,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      user_id: uuid(),
      name,
      email,
      telefone,
      password,
      cpf,
      company_id,
      level_user,
      allowed,
    });

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(
      findUser => findUser.user_id === user.user_id,
    );

    this.users[findIndex] = user;

    return user;
  }

  public async count(company_id: string): Promise<number> {
    return Number(company_id);
  }

  public async destroy(user_id: string): Promise<string> {
    const findIndex = this.users.findIndex(
      findUser => findUser.user_id === user_id,
    );
    this.users.splice(findIndex);
    return user_id;
  }
}

export default FakeUsersRepository;
