import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  client_name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  phone_count: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  usage_period: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  client_password: string;
}
