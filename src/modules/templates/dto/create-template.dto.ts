import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTemplateDto {
  @ApiProperty({ example: 'Sample Template' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  used?: boolean;

  @ApiProperty({
    example: { field1: 'value1', field2: 'value2' },
    required: false,
  })
  @IsOptional()
  custom_fields?: Record<string, any>;

  @ApiProperty({ example: '2024-10-19T12:00:00Z' })
  @IsDate()
  @IsOptional()
  created_date?: Date;

  @ApiProperty({ example: 'active' })
  @IsString()
  @IsNotEmpty()
  status: string;
}
