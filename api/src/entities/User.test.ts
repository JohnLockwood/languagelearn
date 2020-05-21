import {User} from "./User";
import {getConnection, createConnection} from "typeorm";
import { print } from "graphql";

test('basic', () => {
    expect('Hello ' + 'John').toBe('Hello John');
})

test('canCreateAndSaveUser', done  => {
    let user = new User();
    user.userName = "John";
    user.email = "Fake@example.com";
    user.password = "SomeHashedSecret";
    let connection = createConnection().then((conn)=> {
        let userRepository = conn.getRepository(User);
        userRepository.save(user).then ((r) => {
            console.log(r);
            done();
        })
    });
})