import { Module } from '@nestjs/common';
import { ProductsController } from './controllers';
import { ProductsService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [TypeOrmModule, ProductsModule],
})
export class ProductsModule {}
