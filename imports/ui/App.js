import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import QuestionForm from "./QuestionForm";

const App = ({ loading, questions }) => {
  if (loading) {
    return null;
  }
  return (
    <div>
      <QuestionForm />
      <ul>
        {questions.map(question => <li key={question._id}>{question.name}</li>)}
      </ul>
    </div>
  );
};

const appQuery = gql`
  query Questions {
    questions {
      _id
      name
    }
  }
`;
//gives app data property from query
export default graphql(appQuery, {
  props: ({ data }) => ({ ...data })
})(App);
