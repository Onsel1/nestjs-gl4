import { IsIn, IsOptional } from "class-validator";
import { TodoStatusEnum } from "../enum/todo-status.enum"
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateTodoDto{
    @IsIn([
        TodoStatusEnum.waiting,
        TodoStatusEnum.done,
        TodoStatusEnum.actif
    ],{
        message:`Le status est invalide`
    })
    @IsOptional()
    statut : TodoStatusEnum;

    @IsNotEmpty()
    @MinLength(6,{
        message:"$property est invalide, la taille doit étre d'au moins $constraint1 caractéres"
    })
    @IsOptional()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @IsOptional()
    description: string;
}