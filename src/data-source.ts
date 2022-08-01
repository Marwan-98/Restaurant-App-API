import { config } from "dotenv";
import { DataSource } from "typeorm";
import Menu from "./entities/Menu";
import Order from "./entities/Order";
import User from "./entities/User";

config({ path: "./src/.env" });

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: +process.env.PGPORT!,
  username: process.env.PGUSER,
  password: process.env.PGPASS,
  synchronize: true,
  entities: [Menu, Order, User],
  database: "postgres",
});

export default AppDataSource;
