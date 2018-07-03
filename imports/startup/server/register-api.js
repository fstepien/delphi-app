import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import QuestionsSchema from "../../api/questions/Questions.graphql";
import QuestionsResolvers from "../../api/questions/resolvers";
import UsersSchema from "../../api/users/User.graphql";
import UsersResolvers from "../../api/users/resolvers";
import IdeasSchema from "../../api/ideas/Idea.graphql";
import IdeasResolvers from "../../api/ideas/resolvers";

// test new

const typeDefs = [IdeasSchema, QuestionsSchema, UsersSchema];

const resolvers = merge(IdeasResolvers, QuestionsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
