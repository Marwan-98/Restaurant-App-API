import express, { json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "dotenv";
import cors from "cors";
import AppDataSource from "./data-source";
import menuRouter from "./routes/MenuRouter";
import orderRouter from "./routes/OrderRouter";
import userRouter from "./routes/UserRouter";

const app = express();

config({ path: "./src/.env" });
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/menu", menuRouter);
app.use("/orders", orderRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
  AppDataSource.initialize();
});
