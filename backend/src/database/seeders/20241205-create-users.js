module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        firstname: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        password: "hashed_password", // Use uma senha hashed real ou exemplo
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstname: "Jane",
        surname: "Smith",
        email: "jane.smith@example.com",
        password: "hashed_password",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
