import { config } from "dotenv";
import { DataSource } from "typeorm";
import Category from "./entities/Category";
import Order from "./entities/Order";
import OrderLine from "./entities/OrderLine";
import Product from "./entities/Product";

config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: +process.env.PGPORT!,
  username: process.env.PGUSER,
  password: process.env.PGPASS,
  synchronize: true,
  entities: [Product, Category, Order, OrderLine],
  database: "postgres",
});

export default AppDataSource;
