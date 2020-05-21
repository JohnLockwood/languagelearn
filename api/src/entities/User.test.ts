import {User} from "./User";
import {Connector} from './Connector';
import {getConnection, Connection, createConnection} from "typeorm";
import { print } from "graphql";

let connection: Connection | null = null;

beforeAll((done)  =>{

    //console.log("Testing -- beforeEach")
    createConnection().then((c) => {
        //console.log("Hello");
        connection = c;
        done();
    })
});

test('basic', () => {
    expect('Hello ' + 'John').toBe('Hello John');
})

test('canCreateAndSaveUser', done  => {
    let user = new User();
    user.userName = "John";
    user.email = "Fake@example.com";
    user.password = "SomeHashedSecret";

    let connection = getConnection();
    // console.log("Called getConnection")
    let userRepository = connection.getRepository(User);
    userRepository.save(user).then ((r) => {
            // console.log(r);
            done();
        })
})