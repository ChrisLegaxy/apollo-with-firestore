/* Node Package Imports */
import { gql } from 'apollo-server'

/* 
  GraphQL Schema Definition
*/
export default gql`
  type Query {
    authors: [Author]
    author(name: String!): Author
    books: [Book] 
  }

  type Author {
    name: String
    age: Int
    books: [Book]
  }

  type Book {
    title: String
    authorName: String
  }
`;