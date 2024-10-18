import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSampleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string = '';

  @IsString()
  @ApiProperty()
  body: string = '';
}
