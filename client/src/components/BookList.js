import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBookQuery = gql`
  {
    book {
      name
      id
    }
  }
`;

export default class BookList extends Component {
  render() {
    return (
      <div>
        <ul id="book-list">
          <li>list of Books</li>
        </ul>
      </div>
    );
  }
}