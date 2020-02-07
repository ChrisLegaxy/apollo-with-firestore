"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Node Package Imports */
const apollo_server_1 = require("apollo-server");
/* Local Imports */
const firebase_1 = require("./firebase");
/* Initialize Firestore */
const db = firebase_1.adminInit().firestore();
/* Firestore Database References */
const authorRef = db.collection("authors");
const bookRef = db.collection("books");
/*
  GraphQL Resolvers
*/
exports.default = {
    Author: {
        books: async (author) => {
            try {
                const books = await bookRef.where('authorName', '==', author.name).get();
                return books.docs.map(book => book.data());
            }
            catch (err) {
                throw new apollo_server_1.ApolloError(err);
            }
        }
    },
    Query: {
        authors: async () => {
            try {
                const authors = await authorRef.get();
                return authors.docs.map(author => author.data());
            }
            catch (err) {
                throw new apollo_server_1.ApolloError(err);
            }
        },
        author: async (_, args) => {
            try {
                const author = await authorRef.where('name', '==', args.name).get();
                const authorArray = author.docs.map(author => author.data());
                return authorArray[0];
            }
            catch (err) {
                throw new apollo_server_1.ApolloError(err);
            }
        },
        books: async () => {
            try {
                const books = await db.collection("books").get();
                return books.docs.map(book => book.data());
            }
            catch (err) {
                throw new apollo_server_1.ApolloError(err);
            }
        }
    }
};
//# sourceMappingURL=resolvers.js.map