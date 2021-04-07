// Create clients and set shared const values outside of the handler.

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

// Create a DocumentClient that represents the query to add an item
//const dynamodb = require('aws-sdk/clients/dynamodb');


// const docClient = new dynamodb.DocumentClient();
import { DynamoDB, Endpoint } from 'aws-sdk';


const ddb = new DynamoDB({ apiVersion: '2012-08-10' });

ddb.endpoint = new Endpoint('http://dynamo:8000');
// if (process.env['AWS_SAM_LOCAL']) {
//     ddb.endpoint = new Endpoint('http://localhost:8000');
// } else if ('local' == process.env['APP_STAGE']) {
//     // Use this when running code directly via node. Much faster iterations than using sam local
//     ddb.endpoint = new Endpoint('http://localhost:8000');
// }


/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */
exports.getAllItemsHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    // get all items from the table (only first 1MB data, you can use `LastEvaluatedKey` to get the rest of data)
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property
    // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
    var params = {
        TableName : tableName
    };
    const data = await ddb.scan(params).promise()
    // const data = await docClient.scan(params).promise();
    const items = data.Items;

    const response = {
        statusCode: 200,
        body: JSON.stringify(items)
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
