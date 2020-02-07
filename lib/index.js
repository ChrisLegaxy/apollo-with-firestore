"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Node Package Imports */
const apollo_server_1 = require("apollo-server");
/* GraphQL Imports */
const resolvers_1 = require("./resolvers");
const schema_1 = require("./schema");
/* Initialize Apollo Server */
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default
});
/* Start Apollo Server */
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url} 🚀 `);
});
//# sourceMappingURL=index.js.map