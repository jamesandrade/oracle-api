import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import Car from '@modules/cars/infra/typeorm/entities/Car';

interface IRequest {
  mark: string;
  model?: string;
}

@injectable()
class CreateCarService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute({ mark, model}: IRequest): Promise<Car> {

    const car = await this.carsRepository.create({
      mark,
      model,
    });

    return car;
  }
}

export default CreateCarService;
