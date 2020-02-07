"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Node Package Imports */
const apollo_server_1 = require("apollo-server");
/*
  GraphQL Schema Definition
*/
exports.default = apollo_server_1.gql `
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
//# sourceMappingURL=schema.js.map