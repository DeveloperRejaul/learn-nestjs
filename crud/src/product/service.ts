import { Injectable } from '@nestjs/common';
import { Products } from './model';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/user/model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Products) private readonly model: typeof Products) {}

  async createProduct(body) {
    return await this.model.create(body);
  }
  async getProduct() {
    return await this.model.findAll({ include: Users });
  }
}
