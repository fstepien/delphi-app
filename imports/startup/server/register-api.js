import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import QuestionsSchema from "../../api/questions/Questions.graphql";
import QuestionsResolvers from "../../api/questions/resolvers";
import UsersSchema from "../../api/users/User.graphql";
import UsersResolvers from "../../api/users/resolvers";

// hl test

const typeDefs = [QuestionsSchema, UsersSchema];

const resolvers = merge(QuestionsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
