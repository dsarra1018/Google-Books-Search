require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api-routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Defining middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serving static assets
if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Adding routes
app.use(routes);

// Connect to mongoDB
mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost/googlebooks"), {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  }).catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});