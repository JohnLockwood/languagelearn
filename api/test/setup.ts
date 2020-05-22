import {before} from "mocha";
import {Connection, createConnection} from "typeorm";
import {connect} from "../src/entities/Connector";

let connection: Connection = null;

before("Running before", (done) => {
    console.log(
    "--------------------------------------------------\n" +
      "Inside global setup function ** open for business!\n" +    
      "--------------------------------------------------\n");    
    connect().then(() => {
        done();
    })
    .catch(() => {
        done();
    })    
    
});