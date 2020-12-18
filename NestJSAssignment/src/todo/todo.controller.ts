import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { CritereDto } from './dto/critere.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {

    }
    @Post()
    addTodo(
        @Body() newTodo: CreateTodoDto
    ) {
        console.log(typeof newTodo);
        return this.todoService.addTodo(newTodo);
    }

    @Get('/search')
    searchTodo(
        @Body() critereTodo: CritereDto
    ) {
        return this.todoService.searchTodo(critereTodo);
    }

    @Get()
    getTodos():Promise<TodoEntity[]> {
        return this.todoService.findAllTodo();
    }

    @Get(':id')
    getTodoById(
        @Param('id') id
    ) {
        return this.todoService.findTodoById(id);
    }

    @Get('restore/:id')
    restoreTodoById(
        @Param('id') id
    ) {
        return this.todoService.restoreTodo(id);
    }

    @Put(':id')
    updateTodo(
        @Param('id') id,
        @Body() newTodo: UpdateTodoDto
    ):Promise<TodoEntity> {
        return this.todoService.updateTodo(id, newTodo);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id:number) {
        return this.todoService.deleteTodo(id);
    }

}

