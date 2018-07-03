import Questions from "./questions";
import Ideas from "../ideas/ideas";

//obj, args, context
export default {
  //needed to add = null because it was passing in undefined if no userId was available before login and displaying all
  Query: {
    questions(obj, args, { userId = null }) {
      return Questions.find({
        userId
      }).fetch();
    }
  },
  //type Questions because it is being resolved from Question Schema in .graphql
  Question: {
    ideas: question => {
      return Ideas.find({ questionId: question._id }).fetch();
    }
  },
  Mutation: {
    createQuestion(obj, { name }, { userId }) {
      const questionId = Questions.insert({
        name,
        userId
      });
      return Questions.findOne(questionId);
    }
  }
};
