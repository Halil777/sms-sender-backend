import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateOfficeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty() // this is validation when frontend send emtpy string 400 error will return
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsPhoneNumber('TM')
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
