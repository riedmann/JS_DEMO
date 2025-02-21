const jwt = require("jsonwebtoken");

// Your secret key (should be kept private)
const secretKey = "superduper";

// The JWT token you want to validate
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJoYW5zaSIsInJvbGUiOiJhZG1pbiIsInNjaG9vbCI6IkhUTCBEb3JuYmlybiIsImlhdCI6MTczOTc5NjA0MSwiZXhwIjoxNzM5Nzk5NjQxfQ.zNIPGbCAFLJ02XU86aYpqFYfoDnv2i7Mzk0RtcKuCV8"; // Replace with the JWT you want to validate

// Function to validate JWT
function validateJWT(token) {
  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // If the token is valid, you can use the decoded payload
    console.log("Token is valid:", decoded);
    return decoded;
  } catch (err) {
    // If the token is invalid or expired, this block will be executed
    console.error("Invalid or expired token:", err.message);
    return null;
  }
}

// Call the validation function
const decodedPayload = validateJWT(token);
