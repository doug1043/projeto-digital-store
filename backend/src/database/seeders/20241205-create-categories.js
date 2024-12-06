module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Electronics",
        slug: "electronics",
        use_in_menu: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Clothing",
        slug: "clothing",
        use_in_menu: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
