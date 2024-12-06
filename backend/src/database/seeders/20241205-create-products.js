module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "Smartphone XYZ",
        slug: "smartphone-xyz",
        enabled: true,
        stock: 50,
        description: "Latest model with high-end features.",
        price: 999.99,
        price_with_discount: 899.99,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "T-Shirt",
        slug: "t-shirt",
        enabled: true,
        stock: 200,
        description: "Comfortable cotton T-shirt.",
        price: 19.99,
        price_with_discount: 14.99,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
