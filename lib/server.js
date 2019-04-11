const express = require('express');
const { ApolloServer } = require('apollo-server-express');

import merged_schemas from './schemas/final_merged_schema'
const PORT = 4000

// Initialize the app
const app = express();

//Use Helmet and other security stuff

const server = new ApolloServer({
      schema: merged_schemas,
});
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)