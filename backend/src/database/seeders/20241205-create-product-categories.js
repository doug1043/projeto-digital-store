module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("product_categories", [
      {
        product_id: 1, // Produto 1 (Smartphone XYZ)
        category_id: 1, // Categoria 1 (Electronics)
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 2, // Produto 2 (T-Shirt)
        category_id: 2, // Categoria 2 (Clothing)
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_categories", null, {});
  },
};
