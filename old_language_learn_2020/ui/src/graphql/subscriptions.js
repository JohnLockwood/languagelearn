/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToNewMessage = /* GraphQL */ `
  subscription SubscribeToNewMessage($conversationId: ID!) {
    subscribeToNewMessage(conversationId: $conversationId) {
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
export const subscribeToNewUCs = /* GraphQL */ `
  subscription SubscribeToNewUCs($userId: ID!) {
    subscribeToNewUCs(userId: $userId) {
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
export const subscribeToNewUsers = /* GraphQL */ `
  subscription SubscribeToNewUsers {
    subscribeToNewUsers {
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
