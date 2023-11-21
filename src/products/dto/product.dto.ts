import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  id?: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  category_id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  stock: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  user_updated_id: number;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  created_at: number;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  updated_at: number;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  deleted_at: number;
}
