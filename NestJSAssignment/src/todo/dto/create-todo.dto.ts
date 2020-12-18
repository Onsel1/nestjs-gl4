import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import {MAX_ERROR_MESSAGE, MIN_ERROR_MESSAGE} from "../error.messages"
export class CreateTodoDto{
    @IsNotEmpty()
    @MinLength(3,{
        message: MIN_ERROR_MESSAGE
    })
    @MaxLength(10,{
        message: MAX_ERROR_MESSAGE
    })
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(10,{
        message:MIN_ERROR_MESSAGE
    })
    description: string;
}