// Create clients and set shared const values outside of the handler.

// Create a DocumentClient that represents the query to add an item
const dynamodb = require('aws-sdk/clients/dynamodb');




const sdk = require('aws-sdk');

const DynamoDB = sdk.DynamoDB;
const Endpoint = sdk.Endpoint;


const ddb = new DynamoDB({ apiVersion: '2012-08-10' });
ddb.endpoint = new Endpoint('http://dynamo:8000');
// ddb.endpoint = new Endpoint('http://localhost:8000');
// if (process.env['AWS_SAM_LOCAL']) {
//     ddb.endpoint = new Endpoint('http://dynamo:8000');
// }

const docClient = new dynamodb.DocumentClient({ apiVersion: '2012-08-10', endpoint: 'http://dynamo:8000' });
    //.DocumentClient({"service": ddb});

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

/**
 * A simple example includes a HTTP post method to add one item to a DynamoDB table.
 */
exports.putItemHandler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    // Get id and name from the body of the request
    const body = JSON.parse(event.body)
    const id = body.id;
    const name = body.name;

    // Creates a new item, or replaces an old item with a new item
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property
    var params = {
        TableName : tableName,
        Item: { id : id, name: name }
    };

    // const result = await docClient.put(params).promise();

    let putResult = "NOT_SET";

    docClient.put(params, function(err, data) {
        if (err) {
            console.log(err);
            putResult = {error: err};
        }
        else {
            putResult = data;
            console.log(data);
        }
    });

    const payload = {
        event: event,
        context: context,
        putResult: putResult,
        tableName: tableName,
        params: params
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(payload)
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
