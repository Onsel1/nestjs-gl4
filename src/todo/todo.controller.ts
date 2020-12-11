import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('')
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.getTodoById(id);
  }

  @Post('')
  postTodo(@Body() newTodo: CreateTodoDto) {
    return this.todoService.postTodo(newTodo);
  }

  @Put(':id')
  putTodo(@Body() newTodo: UpdateTodoDto, @Param('id') id: string) {
    return this.todoService.putTodo(newTodo, id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }
}
