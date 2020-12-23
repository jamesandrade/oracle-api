import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICarsRepository from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
  car_id: string;
}

@injectable()
class DestroyCarService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute({ car_id }: IRequest): Promise<string> {
    const car = await this.carsRepository.findById(car_id);

    if (!car) {
      throw new AppError('Carro não encontrado');
    }
    const id = await this.carsRepository.destroy(car_id);
    return id;
  }
}

export default DestroyCarService;
