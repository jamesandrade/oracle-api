import { getRepository, Repository } from 'typeorm';

import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';

import Car from '@modules/cars/infra/typeorm/entities/Car';

class CarsRepository implements ICarsRepository {
  private ormRepository: Repository<Car>;

  constructor() {
    this.ormRepository = getRepository(Car);
  }

  public async findById(car_id: string): Promise<Car | undefined> {
    const car = await this.ormRepository.findOne(car_id);

    return car;
  }
  public async findMark(mark: string): Promise<Car | undefined> {
    const car = await this.ormRepository.findOne(mark);
    return car;
  }

  public async findAllToMark(mark: string): Promise<Car[] | undefined> {
    const car = await this.ormRepository.find({
      where: { mark },
    });

    return car;
  }

  public async create({
    mark,
    model,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.ormRepository.create({
      mark,
      model,
    });

    await this.ormRepository.save(car);

    return car;
  }

  public async save(car: Car): Promise<Car> {
    return this.ormRepository.save(car);
  }

  public async destroy(car_id: string): Promise<string> {
    this.ormRepository.delete(car_id);
    return car_id;
  }


}
export default CarsRepository;
