import { validationResult } from "express-validator";
import Admin from "../models/admin.js";
import Booking from "../models/bookings.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/constants.js";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await Admin.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: "Sorry the user does not exist" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ errors: "Incorrect Password" });
    }

    const Data = {
      user: {
        id: user.id,
      },
    };
    const AuthToken = jwt.sign(Data, JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ AuthToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some internal server error occured");
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await Admin.findById(req.user.id).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some internal server error occured");
  }
};

export const completeBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId);

    if (booking.status === "cancelled") {
      return res
        .status(400)
        .json({ errors: "Cannot mark cancelled bookings as completed" });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "completed" },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ errors: "Booking not found" });
    }

    res.json(updatedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: "Failed to complete booking" });
  }
};
