import express from "express";
import Order from "../entities/Order";
import OrderLine from "../entities/OrderLine";
import Product from "../entities/Product";

const router = express();

router.get("/", async (req, res) => {
  const orders = await Order.find({ relations: { orderLine: true } });
  res.json(orders);
});

router.post("/add", async (req, res) => {
  const {
    client: { firstName, lastName, mobileNum, orderNumber, city, address },
    products,
  } = req.body;

  console.log(firstName);

  const order = await Order.create({
    firstName,
    lastName,
    mobileNum,
    orderNumber,
    city,
    address,
  });

  await order.save();

  let findProduct;

  for (let i = 0; i < products.length; i++) {
    findProduct = await Product.findOne({ where: { id: products[i].id } });
    if (findProduct) {
      // console.log(products[i]);
      const orderLine = await OrderLine.create({
        orderId: order.id,
        productName: products[i].productName,
        productId: products[i].productId,
        orderQty: products[i].orderQty,
      });
      await orderLine.save();
    }
  }

  res.json(req.body);
});

router.post('/:id/completed', async (req, res) => {
  const id = +req.params.id;
  const order = await Order.findOne({where: {id: id}})
  if(order) {
  order.completed = true
  await order.save()    
}
  res.json(order);
})

export default router;
