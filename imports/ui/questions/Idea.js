import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Idea extends Component {
  toggleIdea = () => {
    this.props.toggleIdea({
      variables: {
        id: this.props.idea._id
      }
    });
  };
  render() {
    return (
      <li>
        <input
          type="checkbox"
          onChange={this.toggleIdea}
          checked={this.props.idea.completed}
        />
        {this.props.idea.name}
      </li>
    );
  }
}

const toggleIdea = gql`
  mutation toggleIdea($id: String!) {
    toggleIdea(_id: $id) {
      _id
    }
  }
`;

export default graphql(toggleIdea, {
  name: "toggleIdea",
  options: {
    refetchQueries: ["Questions"]
  }
})(Idea);
