# Converted from DynamoDB_Table.template located at:
# http://aws.amazon.com/cloudformation/aws-cloudformation-templates/

from troposphere import Output, Parameter, Ref, Template
from troposphere.dynamodb import (KeySchema, AttributeDefinition, Projection,
                                  ProvisionedThroughput, GlobalSecondaryIndex)
from troposphere.dynamodb import Table

t = Template()

def simpleKeySchema():
    return [
        KeySchema(
            AttributeName="id",
            KeyType="HASH"
        )
    ]

env = "dev"

t.set_description("AWS CloudFormation Sample Template: This template "
                  "demonstrates the creation of a DynamoDB table.")

t.add_parameter(Parameter(
    "AppSyncApiId",
    Type="String",
    Description="The id of the AppSync API associated with this project.",
)),

t.add_parameter(Parameter(
    "AppSyncApiName",
    Type="String",
    Description="The environment name. e.g. Dev, Test, or Production",
    Default="NONE"
))
t.add_parameter(Parameter(
    "S3DeploymentBucket",
    Type="String",
    Description="The S3 bucket containing all deployment assets for the project.",
)),
t.add_parameter(Parameter(
    "S3DeploymentRootKey",
    Type="String",
    Description="An S3 key relative to the S3DeploymentBucket that points to the root\nof the deployment directory.",
))

t.add_resource(Table(
    "conversationTable",
    TableName = f"{env}_conversation",
    AttributeDefinitions=[
        AttributeDefinition(
            AttributeName="id",
            AttributeType="S"
        ),
    ],
    KeySchema=simpleKeySchema(),
    BillingMode="PAY_PER_REQUEST"
))


t.add_resource(Table(
    "userConversationTable",
    TableName = f"{env}_user_conversation",
    AttributeDefinitions=[
        AttributeDefinition(
            AttributeName="userId",
            AttributeType="S"
        ),
        AttributeDefinition(
            AttributeName="conversationId",
            AttributeType="S"
        ),
    ],
    KeySchema=[
        KeySchema(
            AttributeName="userId",
            KeyType="HASH"
        ),
        KeySchema(
            AttributeName="conversationId",
            KeyType="RANGE"
        ),
    ],
    BillingMode="PAY_PER_REQUEST",
    GlobalSecondaryIndexes = [
        GlobalSecondaryIndex(
            IndexName="conversationId-index",
            KeySchema=[KeySchema(
                AttributeName="conversationId",
                KeyType="HASH"
            )],
            Projection=Projection(ProjectionType="ALL")
        )
    ]
))


t.add_resource(Table(
    "userTable",
    TableName = f"{env}_user",
    AttributeDefinitions=[
        AttributeDefinition(
            AttributeName="id",
            AttributeType="S"
        ),
    ],
    KeySchema=[
        KeySchema(
            AttributeName="id",
            KeyType="HASH"
        )
    ],
    BillingMode="PAY_PER_REQUEST"
))



t.add_resource(Table(
    "messageTable",
    TableName = f"{env}_message",
    AttributeDefinitions=[
        AttributeDefinition(
            AttributeName="conversationId",
            AttributeType="S"
        ),
        AttributeDefinition(
            AttributeName="createdAt",
            AttributeType="S"
        ),
    ],
    KeySchema=[
        KeySchema(
            AttributeName="conversationId",
            KeyType="HASH"
        ),
        KeySchema(
            AttributeName="createdAt",
            KeyType="RANGE"
        ),    ],
    BillingMode="PAY_PER_REQUEST"
))





print(t.to_json())

