import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  client_name: string;

  @Column()
  phone_count: number;

  @Column()
  usage_period: string;

  @Column()
  status: string;

  @Column()
  client_password: string;
}
