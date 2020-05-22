import {Entity, PrimaryGeneratedColumn, Column, getConnection} from "typeorm";

@Entity("app_users")
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


export class UserService {
    save(user: User): Promise<User> {
        let userRepository = getConnection().getRepository(User);
        return userRepository.save(user);
    }
}