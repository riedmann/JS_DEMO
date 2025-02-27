const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(cors());

const people = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "David Williams" },
  { id: 5, name: "Emma Davis" },
];

// Define the payload
const payload = {
  userId: 123,
  username: "johndoe",
  role: "admin",
};

// Define a secret key (this should be kept safe and secret)
const secretKey = "your-very-secure-secret";

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  res.send("not ok");
});

app.get("/people", (req, res) => {
  res.send(people);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
