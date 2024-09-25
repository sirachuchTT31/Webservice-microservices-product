const { buildSchema } = require('graphql');

// const productSchema = buildSchema(`
//     type User {
//     id: Int
//     user_id: String
//     email: String
//     firstname: String
//     lastname: String
//     telephone: String
//     created_at: String
//     updated_at: String
//     UserOnRole: [UserOnRole]  
//     }

//     type UserOnRole {
//     id: Int
//     role: Role
//     created_at: String
//     updated_at: String
//     }

//     type Role {
//     id: Int
//     name: String
//     description: String
//     }

//     type Query {
//     users: [User]
//     roles: [Role]
//     }
// `);

const productSchema = buildSchema(`
   type User {
    id: Int
    user_id: String
    email: String
    createdAt: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(user_id: String!, email: String!): User
  }
`);

module.exports = {
    productSchema
}