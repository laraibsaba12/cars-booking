const nodemailer = require("nodemailer");
const Booking = require("../models/Booking");
const User = require("../models/User");

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASSWORD,
  },
});

// =========================
// CREATE BOOKING
// =========================

const createBooking = async (req, res) => {
  try {
    const {
      customerName,
      email,
      phone,
      car,
      pickupLocation,
      dropoffLocation,
      date,
      time,
      passengers,
      message,
    } = req.body;

    if (
      !customerName ||
      !email ||
      !phone ||
      !car ||
      !pickupLocation ||
      !dropoffLocation ||
      !date ||
      !time ||
      !passengers
    ) {
      return res.status(400).json({
        message: "Please fill all required booking fields",
      });
    }

    // Find logged-in client
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        message: "Client account not found",
      });
    }

    // Save booking in MongoDB
    const booking = await Booking.create({
      user: user._id,
      customerName,
      email,
      phone,
      car,
      pickupLocation,
      dropoffLocation,
      date,
      time,
      passengers,
      message,
    });

    // Email admin
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,

      subject: `New Car Booking - ${customerName}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">

          <h2 style="color:#6d28d9;">
            New Car Booking
          </h2>

          <hr />

          <h3>Client Information</h3>

          <p>
            <strong>Name:</strong>
            ${customerName}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone}
          </p>

          <h3>Booking Information</h3>

          <p>
            <strong>Car:</strong>
            ${car}
          </p>

          <p>
            <strong>Pickup:</strong>
            ${pickupLocation}
          </p>

          <p>
            <strong>Drop-off:</strong>
            ${dropoffLocation}
          </p>

          <p>
            <strong>Date:</strong>
            ${date}
          </p>

          <p>
            <strong>Time:</strong>
            ${time}
          </p>

          <p>
            <strong>Passengers:</strong>
            ${passengers}
          </p>

          <p>
            <strong>Message:</strong>
            ${message || "No message"}
          </p>

          <hr />

          <p>
            <strong>Booking ID:</strong>
            ${booking._id}
          </p>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Booking created and sent to admin successfully",

      booking: {
        id: booking._id,
        customerName: booking.customerName,
        email: booking.email,
        phone: booking.phone,
        car: booking.car,
        pickupLocation: booking.pickupLocation,
        dropoffLocation: booking.dropoffLocation,
        date: booking.date,
        time: booking.time,
        passengers: booking.passengers,
        message: booking.message,
      },
    });
  } catch (error) {
    console.error("Booking Error:", error);

    res.status(500).json({
      message: "Booking could not be completed",
    });
  }
};

// =========================
// GET LOGGED-IN CLIENT BOOKINGS
// =========================

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Your bookings fetched successfully",
      bookings,
    });
  } catch (error) {
    console.error("Get Bookings Error:", error);

    res.status(500).json({
      message: "Could not fetch bookings",
    });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
};