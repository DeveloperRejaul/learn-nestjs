import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './service';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Post('/')
  createProduct(@Body() body) {
    return this.service.createProduct(body);
  }

  @Get('/')
  getProduct() {
    return this.service.getProduct();
  }
}
