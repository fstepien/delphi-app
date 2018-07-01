import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import QuestionForm from "./QuestionForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { withApollo } from "react-apollo";

const App = ({ loading, questions, client, user }) => {
  if (loading) {
    return null;
  }
  return (
    <div>
      {user._id ? (
        <button
          onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
        >
          Logout
        </button>
      ) : (
        <div>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </div>
      )}

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
    user {
      _id
    }
  }
`;
//gives app data property from query
export default graphql(appQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
