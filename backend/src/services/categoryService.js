const { Category } = require("../database/models");
const { Op } = require("sequelize");

const categoryService = {
  async search({ limit = 12, page = 1, fields, use_in_menu }) {
    const options = {
      where: {},
      attributes: fields ? fields.split(",") : undefined,
    };

    if (use_in_menu !== undefined) {
      options.where.use_in_menu = use_in_menu === "true";
    }

    if (limit !== -1) {
      options.limit = parseInt(limit);
      options.offset = (parseInt(page) - 1) * parseInt(limit);
    }

    const { count, rows } = await Category.findAndCountAll(options);

    return {
      data: rows,
      total: count,
      limit: parseInt(limit),
      page: parseInt(page),
    };
  },

  async getById(id) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error("Category not found");
    return category;
  },

  async create(categoryData) {
    return Category.create(categoryData);
  },

  async update(id, categoryData) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error("Category not found");
    await category.update(categoryData);
    return true;
  },

  async delete(id) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error("Category not found");
    await category.destroy();
    return true;
  },
};

module.exports = categoryService;
