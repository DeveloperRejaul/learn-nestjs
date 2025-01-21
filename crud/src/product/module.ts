import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from 'src/product/model';
import { Users } from 'src/user/model';
import { ProductController } from './controller';
import { ProductService } from './service';

@Module({
  imports: [SequelizeModule.forFeature([Products, Users])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
