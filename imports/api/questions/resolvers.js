import Questions from "./questions";

//obj, args, context
export default {
  Query: {
    questions(obj, args, { userId }) {
      return Questions.find({
        userId
      }).fetch();
    }
  },

  Mutation: {
    createQuestion(obj, { name }, { userId }) {
      const questionId = Quetsions.insert({
        name,
        userId
      });
      return Questions.findOne(questionId);
    }
  }
};
