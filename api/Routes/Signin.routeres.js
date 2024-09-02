import express from "express";
import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";
import dotenv from "dotenv";
import jwt  from "jsonwebtoken";
dotenv.config(); // Load environment variables from .env file.
const router = express.Router();



router.get('/api/sign-in', function(req, res) {
  res.json({ message: "signin" });
});


router.post("/api/sign-in", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "User not found" });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "User and Password is incorrect" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res
    .cookie('token', token, {httpOnly: true})
    .status(200)
    .json({user});
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }


  
});

export default router;










// try {
//   // dispatch(signInStart());
//   const res = await fetch("/api/sign-in", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(value),
//   });
//   if (res.ok) {
//     toast.success("Log in successfully");
//     navigate("/");
//   } else {
//     console.error("Error:", res.status, res.statusText);
//     toast.error("Signup failed: " + res.statusText);
//   }
//   localStorage.setItem("sign",JSON.stringify(value.email));
// } catch (error) {
//   toast.error("Failed to log in: " + error.message);
//   // dispatch(signInFailure(error.message));

// }