import { timestamp } from "src/generics/timestamp";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TodoStatusEnum } from "../enum/todo-status.enum";

@Entity("todo")
export class TodoEntity extends timestamp {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length:30
    })
    name: string;
    @Column({
        length:255
    })
    description: string;
    @Column({
        type:'enum',
        enum:TodoStatusEnum,
        default:TodoStatusEnum.waiting
    })
    statut: TodoStatusEnum;
}