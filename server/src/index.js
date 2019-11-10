import 'dotenv/config';
import { ApolloServer } from 'apollo-server';

// Schema is for defining the types defined for the schema.
import schema from './schema';
// Resolvers define the technique for fetching the types defined in the schema.
import resolvers from './resolver';
import models, {
  sequelize
} from './models';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models
  },
});

// The `listen` method launches a web server.
sequelize.sync().then(async () => {
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
