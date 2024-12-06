const sequelize = require("../../config/database");
const { DataTypes } = require("sequelize");

const User = require("./User");
const Category = require("./Category");
const Product = require("./Product");
const ProductImage = require("./ProductImage");
const ProductOption = require("./ProductOption");
const ProductCategory = require("./ProductCategory");

// Inicialização dos models
const models = {
  User: User(sequelize, DataTypes),
  Category: Category(sequelize, DataTypes),
  Product: Product(sequelize, DataTypes),
  ProductImage: ProductImage(sequelize, DataTypes),
  ProductOption: ProductOption(sequelize, DataTypes),
  ProductCategory: ProductCategory(sequelize, DataTypes),
};

// Associações
models.Product.belongsToMany(models.Category, {
  through: models.ProductCategory,
  as: "categories",
  foreignKey: "product_id",
});

models.Category.belongsToMany(models.Product, {
  through: models.ProductCategory,
  as: "products",
  foreignKey: "category_id",
});

models.Product.hasMany(models.ProductImage, {
  foreignKey: "product_id",
  as: "images",
});

models.Product.hasMany(models.ProductOption, {
  foreignKey: "product_id",
  as: "options",
});

module.exports = models;
