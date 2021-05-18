const dynamodb = require('aws-sdk/clients/dynamodb');


const getDocumentClient = () => {
    if (process.env['AWS_SAM_LOCAL']) {
        return new dynamodb.DocumentClient({apiVersion: '2012-08-10', endpoint: 'http://dynamo:8000'});
    } else if (proces.env["NODE_ENV"] === "test") {
        return new dynamodb.DocumentClient({apiVersion: '2012-08-10', endpoint: 'http://localhost:8000'});
    } else return new dynamodb.DocumentClient({apiVersion: '2012-08-10'});
}

exports.getDocumentClient = getDocumentClient;