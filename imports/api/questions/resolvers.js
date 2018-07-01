import Questions from "./questions";
import { addResolveFunctionsToSchema } from "graphql-tools";

export default {
  Query: {
    questions() {
      return Questions.find({}).fetch();
    }
  },
  Mutation: {
    createQuestion(obj, { name }, context) {
      console.log(name);
      const questionId = Questions.insert({
        name
      });
      return Questions.findOne(questionId);
    }
  }
};
