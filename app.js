import { config } from "dotenv";

config();

import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("combined"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "hello",
  });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
