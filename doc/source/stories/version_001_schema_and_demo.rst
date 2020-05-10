

Version 001 Schema and Demo
===========================

* As a Developer who also has a job
* I want a preliminary set of APIs / tables to start from
* So I can give a demo at work but still move forward

.. code-block::

    User {
        id: ID!             # Subscriber ID?
        username:String!    # From Cognito  (leave email in cognito)?
        country: String     # ISO? https://www.iso.org/iso-3166-country-codes.html
        profile: String     # Plain text only escape html
    }

    LanguageLevel {
        NATIVE
        FLUENT
        ADVANCED
        INTERMEDIATE
        BEGINNER
    }
    
    Language {              # Not needed for Demo
        user_id: String!    # Hash key?
        language: String!   # Sort key?

    }

See also:

`Building a serverless real-time chat application with AWS AppSync <https://aws.amazon.com/blogs/mobile/building-a-serverless-real-time-chat-application-with-aws-appsync/>`_

The schema for that project is `here <https://github.com/amazon-archives/aws-mobile-appsync-chat-starter-angular/blob/master/backend/schema.graphql>`_