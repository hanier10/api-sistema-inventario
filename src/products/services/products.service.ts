import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly fileRepo: Repository<Product>,
  ) {}

  async create(payload: CreateProductDto) {
    const product = await this.create(payload);
    return this.fileRepo.save(product);
  }
}
