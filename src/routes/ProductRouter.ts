import express from "express";
import Product from "../entities/Product";

const router = express();

router.get("/", async (req, res) => {
  const menu = await Product.find({ relations: { category: true } });
  res.json(menu);
});

router.post("/add", async (req, res) => {
  const { itemName, description, price, category, popular } = req.body;

  const product = await Product.create({
    itemName,
    description,
    price,
    category,
    popular,
  });

  await product.save();
  res.json(product);
});

export default router;
