import {createConnection, Connection} from "typeorm";

let connection: Connection | null = null;

export async function connect() {
    if (connection == null) {
        console.log("Filling connection pool with water...");
        await createConnection()
            .then( (conn) => {
                connection = conn;
                console.log('Connection pool ready for swimming!');
            }).
            catch( (error) => {
                console.log("Error creating connection " + error);
            });
    }
}

