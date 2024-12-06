module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("product_images", [
      {
        product_id: 1, // Produto 1 (Smartphone XYZ)
        path: "images/smartphone_xyz.jpg",
        enabled: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 2, // Produto 2 (T-Shirt)
        path: "images/t-shirt.jpg",
        enabled: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_images", null, {});
  },
};
