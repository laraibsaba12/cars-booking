const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// =========================
// MIDDLEWARE
// =========================

app.use(express.json());

// =========================
// MONGODB CONNECTION
// =========================

connectDB();

// =========================
// ROUTES
// =========================

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// Signup and Login
app.use("/api/auth", authRoutes);

// Car Booking
app.use("/api/bookings", bookingRoutes);

// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Car Booking Backend is running successfully 🚗",
  });
});

// =========================
// SERVER
// =========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});