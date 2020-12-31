import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
 } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Car from '@modules/cars/infra/typeorm/entities/Car';

@Entity('purchases')
class Purchase {
  @PrimaryGeneratedColumn()
  purchase_id: number;

  @Column()
  value: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  car_id: string;

  @ManyToOne(() => Car)
  @JoinColumn({ name: 'car_id' })
  car: Car;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Purchase;
