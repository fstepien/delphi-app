import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) => <h1>{data.hi}</h1>;

const appQuery = gql`
  {
    hi
  }
`;
//gives app data property from query
export default graphql(appQuery)(App);
