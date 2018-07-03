import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createIdea = gql`
  mutation createIdea($name: String!, $questionId: String!) {
    createIdea(name: $name, questionId: $questionId) {
      _id
    }
  }
`;

class IdeaForm extends Component {
  submitForm = () => {
    this.props
      .createIdea({
        variables: {
          name: this.name.value,
          questionId: this.props.questionId
        }
      })
      .then(() => {
        this.name.value = "";
      })
      .catch(error => {
        console.log(error);
      });
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

export default graphql(createIdea, {
  name: "createIdea",
  options: {
    refetchQueries: ["Questions"]
  }
})(IdeaForm);
