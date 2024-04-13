import { Module } from '@nestjs/common';
import { TaskModule } from './task/module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://learnDB:rejaul1200@cluster0.5t4ugsq.mongodb.net/nest',
    ),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
