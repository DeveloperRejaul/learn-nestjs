import { CreateTaskDto, UpdateTaskDto } from './dto';
import { TaskService } from './service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  get() {
    return this.taskService.get();
  }

  @Post()
  create(@Body() task: CreateTaskDto) {
    return this.taskService.create(task);
  }

  @Put(':id')
  async update(@Param() params: { id: string }, @Body() task: UpdateTaskDto) {
    return await this.taskService.update(params.id, task);
  }

  @Delete(':id')
  async delete(@Param() params: { id: string }) {
    return await this.taskService.delete(params.id);
  }
}
