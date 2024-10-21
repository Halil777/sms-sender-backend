import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class License {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client_name: string;

  @Column()
  license_code: string;

  @Column('int')
  phone_count: number;

  @Column()
  usage_period: string;

  @Column()
  status: string;
}
