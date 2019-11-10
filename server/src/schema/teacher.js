import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    teachers: [Teacher!],
    teacher(id: ID!): Teacher! 
  }

  extend type Mutation {
    createNewTeacher(name: String!, email: String!, mobile: String!, is_active: Int!): Teacher!
    deleteTeacher(id: ID!): Boolean!
  }

  type Teacher {
    id: ID!,
    name: String!,
    email: String!,
    mobile: String!,
    is_active: Int,
    createdAt: String,
    updatedAt: String
  }
`;
