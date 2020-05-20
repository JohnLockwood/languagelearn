/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const allMessage = /* GraphQL */ `
  query AllMessage($after: String, $conversationId: ID!, $first: Int) {
    allMessage(after: $after, conversationId: $conversationId, first: $first) {
      author {
        id
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        username
        registered
      }
      content
      conversationId
      createdAt
      id
      isSent
      recipient {
        id
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        username
        registered
      }
      sender
    }
  }
`;
export const allMessageConnection = /* GraphQL */ `
  query AllMessageConnection(
    $after: String
    $conversationId: ID!
    $first: Int
  ) {
    allMessageConnection(
      after: $after
      conversationId: $conversationId
      first: $first
    ) {
      messages {
        author {
          id
          username
          registered
        }
        content
        conversationId
        createdAt
        id
        isSent
        recipient {
          id
          username
          registered
        }
        sender
      }
      nextToken
    }
  }
`;
export const allMessageFrom = /* GraphQL */ `
  query AllMessageFrom(
    $after: String
    $conversationId: ID!
    $first: Int
    $sender: String!
  ) {
    allMessageFrom(
      after: $after
      conversationId: $conversationId
      first: $first
      sender: $sender
    ) {
      author {
        id
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        username
        registered
      }
      content
      conversationId
      createdAt
      id
      isSent
      recipient {
        id
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        username
        registered
      }
      sender
    }
  }
`;
export const allUser = /* GraphQL */ `
  query AllUser($after: String, $first: Int) {
    allUser(after: $after, first: $first) {
      id
      conversations {
        nextToken
        userConversations {
          conversationId
          userId
        }
      }
      messages {
        messages {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
        nextToken
      }
      username
      registered
    }
  }
`;
export const me = /* GraphQL */ `
  query Me {
    me {
      id
      conversations {
        nextToken
        userConversations {
          conversationId
          userId
        }
      }
      messages {
        messages {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
        nextToken
      }
      username
      registered
    }
  }
`;