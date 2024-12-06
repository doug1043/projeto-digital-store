const userService = require("../services/UserService");

const userController = {
  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getById(id);
      return res.status(200).json(user);
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async create(req, res) {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      if (error.message === "Passwords do not match") {
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: "Invalid data" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      await userService.update(id, req.body);
      return res.status(204).send();
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(400).json({ message: "Invalid data" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await userService.delete(id);
      return res.status(204).send();
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = userController;
