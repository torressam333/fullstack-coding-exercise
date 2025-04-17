const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
// Middleware to parse JSON requests
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;

// // Sample API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
  console.log(`EXPRESS Server listening on http://localhost:${PORT}`);
});
