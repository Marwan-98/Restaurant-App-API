import express, { json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "dotenv";
import cors from "cors";
import AppDataSource from "./data-source";
import menuRouter from "./routes/ProductRouter";
import categoryRouter from "./routes/CategoryRouter";
import orderRouter from "./routes/OrderRouter";

const app = express();

config({ path: "./src/.env" });
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/product", menuRouter);
app.use("/category", categoryRouter);
app.use("/orders", orderRouter);

app.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
  AppDataSource.initialize();
});
