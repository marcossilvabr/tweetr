"use strict";

// Basic setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB Setup
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// Connect to MongoDB
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log(`Failed to connect to: $(MONGO_URI}`);
    throw err
  }

  console.log(`Successfully connected to DB: ${MONGODB_URI}`)

  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});
