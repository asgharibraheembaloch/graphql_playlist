import { gql } from "apollo-boost";

const getBookQuery = gql`
  {
    books{
      name
      id
    }
  }
`

const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`

const addBookMutation = gql`
mutation{
  AddBook{name:"", genre:"", authorId:""}
  name
  id
}
`

export {getAuthorsQuery, getBookQuery, addBookMutation};
