import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("my_users")
export class User {
    
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
