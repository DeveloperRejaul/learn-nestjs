import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './model';
import { Products } from 'src/product/model';

@Injectable()
export class UserService {
  constructor(@InjectModel(Users) private readonly model: typeof Users) {}
  async createUser(body) {
    return await this.model.create(body);
  }
  async getUser() {
    return await this.model.findAll({ include: [{ model: Products }] });
  }
}
