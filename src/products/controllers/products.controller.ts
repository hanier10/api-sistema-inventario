import { Controller } from '@nestjs/common';

import { ProductsService } from '../services';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
}
