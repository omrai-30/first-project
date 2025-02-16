const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const DestinationSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});
const Destination = mongoose.model("Destination", DestinationSchema);

const BookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    destination: String
});
const Booking = mongoose.model("Booking", BookingSchema);

app.get("/api/destinations", async (req, res) => {
    const destinations = await Destination.find();
    res.json(destinations);
});

app.post("/api/bookings", async (req, res) => {
    const { name, email, destination } = req.body;
    const newBooking = new Booking({ name, email, destination });
    await newBooking.save();
    res.json({ message: "Booking Successful!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
