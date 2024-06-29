const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route to handle GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Profile Form Submission Server");
});

// Route to handle POST requests to /submit
app.post("/submit", (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  // Process the form data here
  console.log("Form Data:", req.body);

  // Send a response
  res.status(200).send("Form submitted successfully");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
