import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import QuestionForm from "./QuestionForm";
import IdeaForm from "./IdeaForm";
import { withApollo } from "react-apollo";
import Idea from "./questions/Idea";
import UserForm from "./UserForm";

const App = ({ loading, questions, client, user }) => {
  if (loading) {
    return null;
  }
  return (
    <div>
      <UserForm user={user} client={client} />
      {user._id && (
        <React.Fragment>
          <QuestionForm />
          <ul>
            {questions.map(question => (
              <li key={question._id}>
                <span
                  style={{
                    textDecoration: question.completed ? "line-through" : "none"
                  }}
                >
                  {question.name}
                </span>
                <ul>
                  {question.ideas.map(idea => (
                    <Idea key={idea._id} idea={idea} />
                  ))}
                </ul>
                <IdeaForm questionId={question._id} />
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};
//test two
const appQuery = gql`
  query Questions {
    questions {
      _id
      name
      completed
      ideas {
        _id
        name
        completed
      }
    }
    user {
      _id
    }
  }
`;
//gives app data property from query
export default graphql(appQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
