import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsEmail()
  email: string;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
