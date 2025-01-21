import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from 'src/product/model';
import { Users } from './model';
import { UserController } from './controller';
import { UserService } from './service';

@Module({
  imports: [SequelizeModule.forFeature([Products, Users])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
