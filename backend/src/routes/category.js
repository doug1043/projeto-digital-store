const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const authMiddleware = require("../middleware/auth");

router.get("/v1/category/search", categoryController.search);
router.get("/v1/category/:id", categoryController.getById);
router.post("/v1/category", authMiddleware, categoryController.create);
router.put("/v1/category/:id", authMiddleware, categoryController.update);
router.delete("/v1/category/:id", authMiddleware, categoryController.delete);

module.exports = router;
