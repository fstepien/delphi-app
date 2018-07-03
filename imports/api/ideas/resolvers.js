import Ideas from "./ideas";

export default {
  Mutation: {
    createIdea(obj, { name, questionId }) {
      const ideaId = Ideas.insert({
        name,
        questionId,
        completed: false
      });
      return Ideas.findOne(ideaId);
    },
    toggleIdea(obj, { _id }) {
      const idea = Ideas.findOne(_id);
      Ideas.update(_id, {
        $set: {
          completed: !idea.completed
        }
      });
      return Ideas.findOne(idea);
    }
  }
};
