import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLicenseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  client_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  license_code: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  phone_count: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  usage_perod: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;
}
