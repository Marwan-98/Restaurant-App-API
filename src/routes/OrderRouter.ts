import express from "express";
import Order from "../entities/Order";

const router = express();

router.get("/", async (req, res) => {
  const orders = await Order.find({ relations: { item: true } });
  res.json(orders);
});

router.post("/add", async (req, res) => {
  const { item, user, orderQty } = req.body;

  const order = await Order.create({
    orderQty,
    user,
    item,
  });

  await order.save();
  res.json(order);
});

export default router;
