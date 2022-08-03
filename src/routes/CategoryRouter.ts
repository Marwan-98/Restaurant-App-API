import express from "express";
import Category from "../entities/Category";

const router = express();

router.get("/", async (req, res) => {
  const menu = await Category.find();
  res.json(menu);
});

router.post("/add", async (req, res) => {
  const { name } = req.body;

  const category = await Category.create({
    name,
  });

  await category.save();
  res.json(category);
});

export default router;
