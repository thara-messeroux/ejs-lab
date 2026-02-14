// Import express
const express = require("express");

// Create the app
const app = express();

// Tell Express to use EJS as the template engine
app.set("view engine", "ejs");

// Define a port number
const PORT = 3000;

// Create a simple route
app.get("/", (req, res) => {
  // Send a simple message back
    res.render("index");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


