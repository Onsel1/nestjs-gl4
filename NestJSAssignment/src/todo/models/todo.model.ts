import { TodoStatusEnum } from "../enum/todo-status.enum";
import { v4 as uuidv4 } from 'uuid';

export class Todo {
    id: string ;
    name: string;
    description: string;
    dateDeCreation: Date;
    statut: TodoStatusEnum;

    constructor(
        id = uuidv4(),
        name = '',
        description = '',
        status = TodoStatusEnum.waiting,
        date = new Date()
    ) {
        this.id = id;
        this.description = description;
        this.name = name;
        this.statut = status;
        this.dateDeCreation = date;
    }

}