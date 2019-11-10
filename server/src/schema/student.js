import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    students: [Student!]
    student(id: ID!): Student! 
  }

  extend type Mutation {
    createNewStudent(name: String!, email: String!, mobile: String!, is_active: Int!): Student!
    deleteStudent(id: ID!): Boolean!
  }

  type Student {
    id: ID!
    name: String!
    email: String!
    mobile: String!
    is_active: Int,
    created_at: String
    updated_at: String
  }
`;
