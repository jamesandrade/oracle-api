import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

export default interface IUsersRepository {
  findById(user_id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findByTelefone(telefone: string): Promise<User | undefined>;
  findByCpf(cpf: string): Promise<User | undefined>;

  create(data: ICreateUserDTO): Promise<User>;
  count(): Promise<number>;

  destroy(user_id: string): Promise<string>;

  save(user: User): Promise<User>;
}
