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
    const { idea } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          onChange={this.toggleIdea}
          checked={idea.completed}
        />
        <span
          style={{ textDecoration: idea.completed ? "line-through" : "none" }}
        >
          {idea.name}
        </span>
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
