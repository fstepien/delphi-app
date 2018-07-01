import Questions from "./questions";

//obj, args, context
export default {
  Query: {
    questions(obj, args, { userId }) {
      //give out all resolutsions saved with userId saved as this
      return Questions.find({
        userId
      }).fetch();
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
