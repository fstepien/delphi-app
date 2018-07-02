import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import QuestionsSchema from "../../api/questions/Questions.graphql";
import QuestionsResolvers from "../../api/questions/resolvers";
import UsersSchema from "../../api/users/User.graphql";
import UsersResolvers from "../../api/users/resolvers";

// hl test

const testSchema = `
type Query {
  hi: String
  questions: [Question]
  user: User
}
`;

const typeDefs = [testSchema, QuestionsSchema, UsersSchema];

const testResolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const resolvers = merge(testResolvers, QuestionsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
