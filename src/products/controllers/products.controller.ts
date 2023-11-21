import { Body, Controller, Post } from '@nestjs/common';

import { ProductsService } from '../services';
import { CreateProductDto } from '../dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }
}
