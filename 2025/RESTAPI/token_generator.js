const jwt = require("jsonwebtoken");

// Define the payload
const payload = {
  userId: 123,
  username: "hansi",
  role: "admin",
  school: "HTL Dornbirn",
};

// Define a secret key (this should be kept safe and secret)
const secretKey = "superduper";

// Define the options (e.g., expiration time)
const options = {
  expiresIn: "1h", // Token will expire in 1 hour
};

// Generate the JWT
const token = jwt.sign(payload, secretKey, options);

console.log("Generated JWT:", token);
