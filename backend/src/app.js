const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
require("dotenv").config();
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression()); // Comprime as respostas

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev")); // Log de requisições HTTP
}

// API Routes
app.use("/api/v1", routes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date() });
});

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: "Não encontrado!",
  });
});

module.exports = app;
