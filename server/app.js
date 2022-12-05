const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose');

const app = express();

const mongooseDB = async ()=>{
  try {
    // Option 1
    //await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    //console.log('mongoose open for business');
    
    // Option 2 -- To keep reference of connection
    const connection = mongoose.createConnection("mongodb+srv://asgharibraheem:askari@5718@cluster0.56nr7no.mongodb.net/gql-ninja",{ useNewUrlParser: true, useUnifiedTopology:true });
    await connection;
    console.log('mongoose open for business');

    // Option 3
    //mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    //const connection = mongoose.connection;
    //await connection;
    //console.log('mongoose open for business');
  }
  catch(error){
    console.log( 'mongoose connection error: ',error);
  }
};

mongooseDB();


app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
