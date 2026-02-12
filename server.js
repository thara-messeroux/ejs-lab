// Import express
const express = require("express");

// Create the app
const app = express();

// Define a port number
const PORT = 3000;

// Create a simple route
app.get("/", (req, res) => {
  // Send a simple message back
  res.send("Server is working 🚀");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
