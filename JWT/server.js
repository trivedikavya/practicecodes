const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public")); // serve HTML files

// Secret Key (used to sign JWT)
const SECRET_KEY = "kavya446e81kjpfw938424";

// Fake Users Database
const users = [
  { username: "leo", password: "1234", role: "user" },
  { username: "kavya", password: "1234", role: "admin" },
];

// Login Route (Generate JWT)
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Create Token
  const token = jwt.sign(
    { username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// Middleware to Verify JWT
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(403).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

// Protected Routes
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username} to Dashboard 🚀` });
});

app.get("/admin", verifyToken, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied! Admins only ❌" });
  }
  res.json({ message: `Welcome ${req.user.username} to Admin Panel 👑` });
});

// Run Server
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
