const { Product, ProductImage, ProductOption } = require("../database/models");
const { Op } = require("sequelize");

const productService = {
  async search({
    limit = 12,
    page = 1,
    fields,
    match,
    category_ids,
    priceRange,
    options = {},
  }) {
    const queryOptions = {
      where: {},
      include: [
        {
          model: ProductImage,
          as: "images",
        },
        {
          model: ProductOption,
          as: "options",
        },
      ],
    };

    // Aplicar campos selecionados
    if (fields) {
      queryOptions.attributes = fields.split(",");
    }

    // Aplicar limite e paginação
    if (limit !== -1) {
      queryOptions.limit = parseInt(limit);
      queryOptions.offset = (parseInt(page) - 1) * parseInt(limit);
    }

    // Filtrar por termo de busca
    if (match) {
      queryOptions.where[Op.or] = [
        { name: { [Op.iLike]: `%${match}%` } },
        { description: { [Op.iLike]: `%${match}%` } },
      ];
    }

    // Filtrar por categorias
    if (category_ids) {
      queryOptions.where.category_ids = {
        [Op.overlap]: category_ids.split(",").map(Number),
      };
    }

    // Filtrar por faixa de preço
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      if (!isNaN(min) && !isNaN(max)) {
        queryOptions.where.price = {
          [Op.between]: [min, max],
        };
      }
    }

    // Filtrar por opções
    Object.entries(options).forEach(([key, value]) => {
      if (key.startsWith("option[")) {
        const optionId = key.match(/\d+/)[0];
        queryOptions.include.push({
          model: ProductOption,
          as: "options",
          where: {
            id: optionId,
            values: { [Op.overlap]: value.split(",") },
          },
        });
      }
    });

    const { count, rows } = await Product.findAndCountAll(queryOptions);

    return {
      data: rows,
      total: count,
      limit: parseInt(limit),
      page: parseInt(page),
    };
  },

  async getById(id) {
    const product = await Product.findByPk(id, {
      include: [
        {
          model: ProductImage,
          as: "images",
        },
        {
          model: ProductOption,
          as: "options",
        },
      ],
    });

    if (!product) throw new Error("Product not found");
    return product;
  },

  async create(productData) {
    const transaction = await Product.sequelize.transaction();

    try {
      // Criar produto com suas relações sem processar imagens
      const product = await Product.create(
        {
          ...productData,
        },
        {
          include: [
            { model: ProductImage, as: "images" },
            { model: ProductOption, as: "options" },
          ],
          transaction,
        }
      );

      await transaction.commit();
      return product;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async update(id, productData) {
    const transaction = await Product.sequelize.transaction();

    try {
      const product = await Product.findByPk(id);
      if (!product) throw new Error("Product not found");

      // Atualizar imagens sem processamento
      if (productData.images) {
        const processedImages = productData.images.map((image) => {
          if (image.deleted) {
            ProductImage.destroy({
              where: { id: image.id },
              transaction,
            });
            return null;
          }
          return image;
        });

        productData.images = processedImages.filter((img) => img !== null);
      }

      // Atualizar opções
      if (productData.options) {
        for (const option of productData.options) {
          if (option.deleted) {
            await ProductOption.destroy({
              where: { id: option.id },
              transaction,
            });
          } else if (option.id) {
            await ProductOption.update(option, {
              where: { id: option.id },
              transaction,
            });
          } else {
            await ProductOption.create(
              {
                ...option,
                product_id: id,
              },
              { transaction }
            );
          }
        }
      }

      await product.update(productData, { transaction });
      await transaction.commit();
      return true;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async delete(id) {
    const transaction = await Product.sequelize.transaction();

    try {
      const product = await Product.findByPk(id);
      if (!product) throw new Error("Product not found");

      await ProductImage.destroy({
        where: { product_id: id },
        transaction,
      });

      await ProductOption.destroy({
        where: { product_id: id },
        transaction,
      });

      await product.destroy({ transaction });

      await transaction.commit();
      return true;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};

module.exports = productService;
