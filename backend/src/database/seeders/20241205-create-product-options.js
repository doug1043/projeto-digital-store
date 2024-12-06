module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("product_options", [
      {
        product_id: 1, // Produto 1 (Smartphone XYZ)
        title: "Color",
        shape: "circle",
        type: "text",
        values: "Black, White, Red",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 2, // Produto 2 (T-Shirt)
        title: "Size",
        shape: "square",
        type: "text",
        values: "S, M, L, XL",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_options", null, {});
  },
};
