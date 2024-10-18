import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;
}
