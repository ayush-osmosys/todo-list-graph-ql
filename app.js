const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const schema = require("./model/schema");
const bodyParser = require("body-parser");
// const cors = require("cors");
require("dotenv").config();
const task = require("./routes/task");
const PORT = process.env.PORT;

const startServer = async () => {
  const server = new ApolloServer({
    schema,
  });
  await server.start();
  app.use(task);
  app.use("/graphql", expressMiddleware(server));
};
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors);
app.listen(PORT, () => console.log("Server started at port " + PORT));
startServer();
