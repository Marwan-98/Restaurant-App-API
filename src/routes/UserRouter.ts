import express from "express";
import User from "../entities/User";

const router = express();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/add", async (req, res) => {
  const { name, mobile, address, city } = req.body;
  const user = await User.create({
    name,
    mobile,
    address,
    city,
  });

  await user.save();
  res.json(user);
});

export default router;
