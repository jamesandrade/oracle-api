import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
 } from 'typeorm';

@Entity('cars')
class Car {
  @PrimaryGeneratedColumn()
  car_id: number;

  @Column()
  mark: string;

  @Column({ type: 'varchar', nullable: true })
  model: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Car;
