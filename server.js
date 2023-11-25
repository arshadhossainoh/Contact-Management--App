const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
// connecting database
connectDb();
const app = express();

const port = process.env.port || 5000;
// app.use() is a middleware, here express.json is used to parse the data from client

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
