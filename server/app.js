const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://asgharibraheem:askari@5718@cluster0.56nr7no.mongodb.net/gql-ninja",{ useNewUrlParser: true, useUnifiedTopology:true });

mongoose.connection.once('open', () => {
  console.log('conneted to database');
});
// bind express with graphql
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});




