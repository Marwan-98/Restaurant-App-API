import express from "express";
import Menu from "../entities/Menu";

const router = express();

router.get("/", async (req, res) => {
  const menu = await Menu.find();
  res.json(menu);
});

router.post("/add", async (req, res) => {
  const { itemName, ingredients, price, category, popular } = req.body;

  const item = await Menu.create({
    itemName,
    ingredients,
    price,
    category,
    popular,
  });

  await item.save();
  res.json(item);
});

export default router;
