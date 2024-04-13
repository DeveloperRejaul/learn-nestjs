import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schema';
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModal: Model<Task>) {}

  async get() {
    return await this.taskModal.find();
  }
  async create(task: CreateTaskDto) {
    const newTask = new this.taskModal(task);
    return await newTask.save();
  }
  async update(id: string, task: UpdateTaskDto) {
    return await this.taskModal.findByIdAndUpdate(
      { _id: id },
      { $set: task },
      { new: true },
    );
  }
  async delete(id: string) {
    return await this.taskModal.findByIdAndDelete({ _id: id });
  }
}
