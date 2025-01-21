import { Module } from '@nestjs/common';
import { TaskModule } from './task/module';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './user/model';
import { Products } from './product/model';
import { ProductModule } from './product/module';
import { UserModule } from './user/module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://learnDB:rejaul1200@cluster0.5t4ugsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'rejaul1200',
      database: 'learnpg',
      synchronize: true,
      autoLoadModels: true,
      models: [Users, Products],
    }),
    TaskModule,
    ProductModule,
    UserModule,
  ],
})
export class AppModule {}
