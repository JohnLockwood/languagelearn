/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConversation = /* GraphQL */ `
  mutation CreateConversation($createdAt: String, $id: ID!, $name: String!) {
    createConversation(createdAt: $createdAt, id: $id, name: $name) {
      createdAt
      id
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
      name
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $content: String
    $conversationId: ID!
    $createdAt: String!
    $id: ID!
  ) {
    createMessage(
      content: $content
      conversationId: $conversationId
      createdAt: $createdAt
      id: $id
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
export const createUser = /* GraphQL */ `
  mutation CreateUser($username: String!, $id: String!) {
    createUser(username: $username, id: $id) {
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
export const createUserConversations = /* GraphQL */ `
  mutation CreateUserConversations($conversationId: ID!, $userId: ID!) {
    createUserConversations(conversationId: $conversationId, userId: $userId) {
      associated {
        associated {
          conversationId
          userId
        }
        conversation {
          createdAt
          id
          name
        }
        conversationId
        user {
          id
          username
          registered
        }
        userId
      }
      conversation {
        createdAt
        id
        messages {
          nextToken
        }
        name
      }
      conversationId
      user {
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
      userId
    }
  }
`;
