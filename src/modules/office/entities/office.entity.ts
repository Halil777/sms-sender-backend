import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/*
DTO = is for frontend post request body
Entity = is database table

dto comes from frontend or postman etc...
then you will get dto and insert them into the database through converting dto to entity
*/

@Entity()
export class Office {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  phone_number: string;

  @Column()
  password: string;
}
