import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import QuestionsSchema from "../../api/questions/Questions.graphql";
import QuestionsResolvers from "../../api/questions/resolvers";

const typeDefs = [
  `
type Query {
    hi: String
    questions: [Question]
}
`,
  QuestionsSchema
];
//new test
const resolver = {
  Query: {
    hi() {
      return "Hello Delphi Users";
    }
  }
};

const resolvers = merge(resolver, QuestionsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
