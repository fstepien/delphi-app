import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createQuestion = gql`
  mutation createQuestion($name: String!) {
    createQuestion(name: $name) {
      _id
    }
  }
`;

//add clear form in .then() ?
class QuestionForm extends Component {
  submitForm = () => {
    this.props
      .createQuestion({
        variables: {
          name: this.name.value
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}
// Questions in refetchQueries is the named query from App.js
export default graphql(createQuestion, {
  name: "createQuestion",
  options: {
    refetchQueries: ["Questions"]
  }
})(QuestionForm);
