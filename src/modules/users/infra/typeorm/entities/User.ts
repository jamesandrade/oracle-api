import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  user_id: string;

  @Column()
  name: string;

  @Column({ type: 'varchar', nullable: true })
  email: string | null;

  @Column()
  telefone: string;

}
export default User;
