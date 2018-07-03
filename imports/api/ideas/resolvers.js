import Ideas from "./ideas";

export default {
  Mutation: {
    createIdea(obj, { name, questionId }, { userId }) {
      if (userId) {
        const ideaId = Ideas.insert({
          name,
          questionId,
          completed: false
        });
        return Ideas.findOne(ideaId);
      }
      throw new Error("Unauthorized");
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
