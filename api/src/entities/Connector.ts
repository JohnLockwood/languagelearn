import {createConnection, Connection} from "typeorm";

let connection: Connection | null = null;

export class Connector {

    constructor () {
        
    }

    setup = async () => {
        if (connection == null) {
            console.log("Creating connection");
            createConnection()
                .then( (conn) => {
                    connection = conn;
                    console.log('Connection created');
                }).
                catch( (error) => {
                    console.log("Error creating connection " + error);
                });
        }
    }
};

