const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

router.get("/v1/user/:id", userController.getById);
router.post("/v1/user", userController.create);
router.put("/v1/user/:id", authMiddleware, userController.update);
router.delete("/v1/user/:id", authMiddleware, userController.delete);

module.exports = router;
