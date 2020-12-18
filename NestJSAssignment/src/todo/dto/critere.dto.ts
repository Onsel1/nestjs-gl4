import { IsIn, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { TodoStatusEnum } from "../enum/todo-status.enum";
export class CritereDto{
    @IsNotEmpty()
    chaine: string;
    
    @IsNotEmpty()
    @IsIn([
        TodoStatusEnum.waiting,
        TodoStatusEnum.done,
        TodoStatusEnum.actif
    ],{
        message:`Le status est invalide`
    })
    statut: TodoStatusEnum;
}