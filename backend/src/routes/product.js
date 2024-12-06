const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authMiddleware = require("../middleware/auth");

router.get("/v1/product/search", productController.search);
router.get("/v1/product/:id", productController.getById);
router.post("/v1/product", authMiddleware, productController.create);
router.put("/v1/product/:id", authMiddleware, productController.update);
router.delete("/v1/product/:id", authMiddleware, productController.delete);

module.exports = router;
