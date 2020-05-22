import {before} from "mocha";
import {Connection, createConnection} from "typeorm";

let connection: Connection = null;

before((done) => {
    console.log("\n--------------------------------------------------\n" +
    "Inside global setup function ** open for business!\n" +    
    "--------------------------------------------------\n");    
    //done();
  createConnection()
    .then( (conn) => {
        connection = conn;
        console.log('Connection created, calling done');
        done();
    }).
    catch( (error) => {
        console.log("Error creating connection " + error);
        done();
    });    
    
    
});