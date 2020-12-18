import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Like, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { CritereDto } from './dto/critere.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoStatusEnum } from './enum/todo-status.enum';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {
    private todos : Todo[] = [];

    constructor(
        @InjectRepository(TodoEntity)
        private readonly TodoRepository:Repository<TodoEntity>
    ) {
        this.todos = [
            new Todo(),
            new Todo()
        ];
    }
    getTodos(): Todo[] {
        return this.todos;
    }
    
    async searchTodo(critereTodo:CritereDto) {
        const todos = await this.TodoRepository.find(
        {
          description:Like(`%${critereTodo.chaine}%`),
          statut:In([TodoStatusEnum.actif,TodoStatusEnum.waiting,TodoStatusEnum.actif])        
        });
        if (todos[0])
          return todos[0];
        throw new NotFoundException(`This TODO doesn't exist`);
    }

    async findTodoById(id:number) {
        const todos = await this.TodoRepository.find({id});
        if (todos[0])
          return todos[0];
        throw new NotFoundException(`TODO ID ${id} is not available`);
    }

    async findAllTodo(): Promise<TodoEntity[]> {
        return await this.TodoRepository.find();
    }


    async addTodo(newTodo : CreateTodoDto): Promise<TodoEntity > {
        const todo = await this.TodoRepository.create(newTodo);
        return await this.TodoRepository.save(todo);
    }

    /*deleteFakeTodo(id:  number ){
        const todo = this.findTodoById(id);
        this.todos.splice(this.todos.indexOf(todo),1);
        return this.todos;
    }*/
    async deleteTodo(id:number ){
        return await this.TodoRepository.softDelete(id)
    }
    async restoreTodo(id:string ){
        return await this.TodoRepository.restore(id)
    }
    async updateTodo( id: string, newTodo: UpdateTodoDto): Promise<TodoEntity>{
        const todo = await this.TodoRepository.preload({
            id:+id,
            ...newTodo
        })
        if(todo) {
            new NotFoundException(`TODO ID: ${id} doesn't exist`);
        }
        return await this.TodoRepository.save(todo);
    }
}
