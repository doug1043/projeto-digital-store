const productService = require("../services/productService");

const productController = {
  async search(req, res) {
    try {
      const {
        limit,
        page,
        fields,
        match,
        category_ids,
        "price-range": priceRange,
        ...options
      } = req.query;

      const result = await productService.search({
        limit,
        page,
        fields,
        match,
        category_ids,
        priceRange,
        options,
      });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: "Invalid query parameters" });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await productService.getById(id);
      return res.status(200).json(product);
    } catch (error) {
      if (error.message === "Product not found") {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async create(req, res) {
    try {
      const product = await productService.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      if (error.message === "Invalid image format") {
        return res.status(400).json({ message: "Invalid image format" });
      }
      return res.status(400).json({ message: "Invalid data" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      await productService.update(id, req.body);
      return res.status(204).send();
    } catch (error) {
      if (error.message === "Product not found") {
        return res.status(404).json({ message: "Product not found" });
      }
      if (error.message === "Invalid image format") {
        return res.status(400).json({ message: "Invalid image format" });
      }
      return res.status(400).json({ message: "Invalid data" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await productService.delete(id);
      return res.status(204).send();
    } catch (error) {
      if (error.message === "Product not found") {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = productController;
