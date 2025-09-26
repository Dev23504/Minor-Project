const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// -----------------------
// MongoDB connection
// -----------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// -----------------------
// Contact Schema & Model
// -----------------------
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Contact = mongoose.model("Contact", contactSchema);

// -----------------------
// Book Havan Schema & Model
// -----------------------
const havanBookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  havanType: String,
  message: String,
  bookedAt: { type: Date, default: Date.now }
});
const HavanBooking = mongoose.model("HavanBooking", havanBookingSchema);

// -----------------------
// Email transporter (Gmail example)
// -----------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// -----------------------
// Routes
// -----------------------

// Contact form POST
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email, // user email
      subject: "धन्यवाद! आपका संदेश प्राप्त हुआ",
      text: `नमस्ते ${req.body.name},\n\nहमने आपका संदेश प्राप्त कर लिया है:\n\n"${req.body.message}"\n\nहम जल्द ही संपर्क करेंगे।`
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      else console.log("Email sent: " + info.response);
    });

    res.status(200).json({ message: "Message saved and email sent" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Book Havan POST
app.post("/api/book-havan", async (req, res) => {
  try {
    const newBooking = new HavanBooking(req.body);
    await newBooking.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email, // user email
      subject: "Havan Booking Confirmation",
      text: `नमस्ते ${req.body.name},\n\nआपने ${req.body.havanType} हवन के लिए बुकिंग करवाई है।\n\nसंदेश: ${req.body.message}\n\nधन्यवाद।`
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      else console.log("Email sent: " + info.response);
    });

    res.status(200).json({ message: "Havan booked and email sent" });
  } catch (err) {
    res.status(500).json({ error: "Booking failed" });
  }
});

// -----------------------
// Start Server
// -----------------------
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
