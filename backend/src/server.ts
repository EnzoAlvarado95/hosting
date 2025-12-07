import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";

import casasRoutes from "./routes/casas.routes";

dotenv.config();

const app = express();
app.use(cors({
  origin: [
    "https://andali.com.mx",
    "https://www.andali.com.mx",
    "http://localhost:3000"
  ],
  credentials: true
}));


app.disable("x-powered-by");

app.use(express.json());

app.use("/api/casas", casasRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
