import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('/')
  createUser(@Body() body) {
    return this.service.createUser(body);
  }

  @Get('/')
  getUser() {
    return this.service.getUser();
  }
}
