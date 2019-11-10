import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    batches: [Batch!],
    batch(id: ID!): Batch! 
  }

  extend type Mutation {
    createNewBatch(name: String!, teacher: String!, is_active: Int!): Batch!
    deleteBatch(id: ID!): Boolean!
  }

  type Batch {
    id: ID!,
    name: String!,
    teacher: Int!,
    is_active: Int,
    createdAt: String,
    updatedAt: String
  }
`;
