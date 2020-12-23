import Car from '@modules/cars/infra/typeorm/entities/Car';
import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';

export default interface IUsersRepository {
  findById(car_id: string): Promise<Car | undefined>;

  findMark(car_id: string): Promise<Car | undefined>;
  findAllToMark(car_id: string): Promise<Car[] | undefined>;

  create(data: ICreateCarDTO): Promise<Car>;
  destroy(car_id: string): Promise<string>;
  save(car: Car): Promise<Car>;
}
