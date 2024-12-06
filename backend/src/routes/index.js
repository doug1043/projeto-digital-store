const express = require("express");
const userRoutes = require("./user");
const categoryRoutes = require("./product");
const productRoutes = require("./category");

const router = express.Router();

// Agrupando as rotas
router.use(userRoutes);
router.use(categoryRoutes);
router.use(productRoutes);

module.exports = router;
