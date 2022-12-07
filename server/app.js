const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });

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




