import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { userRoute } from "./app/modules/users/user.route";
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Other-Custom-Header"],
  })
);

app.get("/", (_, res) => {
  res.send("welcome to Darazon .");
});
app.use("/api/v1", userRoute);

app.use(globalErrorHandler);
app.use(notFound);
export default app;
