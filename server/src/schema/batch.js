import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    batches: [Batch!],
    batch(id: ID!): Batch! 
  }

  extend type Mutation {
    createNewBatch(name: String!, teacher_id: Int!, is_active: Int!): Batch!
    deleteBatch(id: ID!): Boolean!
  }

  type Batch {
    id: ID!,
    name: String!,
    teacher_id: Int!,
    teacher: Teacher!,
    is_active: Int,
    created_at: String,
    updated_at: String
  }
`;
