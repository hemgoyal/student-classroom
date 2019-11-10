import { gql } from 'apollo-server';

import studentSchema from './student';
import teacherSchema from './teacher';
import batchSchema from './batch';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  studentSchema,
  teacherSchema,
  batchSchema
];
