import express from "express";
import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";

const router = express.Router();

router.get("/api/sign-up", function (req, res) {
  res.json({ message: "User created" });
});

router.post("/api/sign-up", async (req, res) => {
  const { name, email, password, phone } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword, phone, });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

export default router;
