// Create clients and set shared const values outside of the handler.
// Get a DocumentClient that represents the query to add an item
const { getDocumentClient } = require('../common/config');
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

    const docClient = getDocumentClient();
    const result = await docClient.put(params).promise();

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
        params: params,
        environment: process.env
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(payload, null, 2)
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
