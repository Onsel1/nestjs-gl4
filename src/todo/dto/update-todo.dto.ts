import { IsEnum, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { TodoStatusEnum } from '../enums/todo.status.enum';

export class UpdateTodoDto {
  @IsNotEmpty({
    message: 'The name field is required',
  })
  @MinLength(3, {
    message: 'The name must have a minimum size of 3 characters',
  })
  @MaxLength(10, {
    message: 'The name must have a maximum size of 10 characters',
  })
  name: string;

  @IsNotEmpty({ message: 'The description field is required' })
  @MinLength(10, {
    message: 'The description must have a minimum size of 10 characters',
  })
  description: string;

  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
