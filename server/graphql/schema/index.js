const { buildSchema } = require('graphql');

module.exports = buildSchema(`


type User {
  _id: ID!
  name: String!
  email: String!
  mobile: String!
  company:String!
  jobTitle: String!
  department:String!
  joinDate:String!
  
}

input userInput {
  name: String!
  email: String!
  mobile: String!
  company:String!
  jobTitle: String!
  department:String!
  joinDate:String!
}



type RootQuery {
    users: [User!]!   
}

type RootMutation {
    createUser(userInput: userInput): User
    
   
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
