const categoryService = require("../services/categoryService");

const categoryController = {
  async search(req, res) {
    try {
      const { limit, page, fields, use_in_menu } = req.query;
      const result = await categoryService.search({
        limit,
        page,
        fields,
        use_in_menu,
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: "Invalid query parameters" });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const category = await categoryService.getById(id);
      return res.status(200).json(category);
    } catch (error) {
      if (error.message === "Category not found") {
        return res.status(404).json({ message: "Category not found" });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async create(req, res) {
    try {
      const category = await categoryService.create(req.body);
      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ message: "Invalid data" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      await categoryService.update(id, req.body);
      return res.status(204).send();
    } catch (error) {
      if (error.message === "Category not found") {
        return res.status(404).json({ message: "Category not found" });
      }
      return res.status(400).json({ message: "Invalid data" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await categoryService.delete(id);
      return res.status(204).send();
    } catch (error) {
      if (error.message === "Category not found") {
        return res.status(404).json({ message: "Category not found" });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = categoryController;
