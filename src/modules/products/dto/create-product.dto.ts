import { UploadedFiles } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Sample Product' })
  @IsString()
  @IsNotEmpty()
  product_name: string;

  @ApiProperty({ example: 'Electronics' })
  @IsString()
  @IsNotEmpty()
  products_categories: string;

  @ApiProperty({ example: 'This is a great product.' })
  @IsString()
  @IsNotEmpty()
  product_description: string;

  @ApiProperty({ example: 29.99 })
  @IsNotEmpty()
  product_price: string;

  @ApiProperty({
    description: 'Image Datas',
    format: 'binary',
  })
  images: any[];
}
