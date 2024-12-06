module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("product_options", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shape: {
        type: Sequelize.ENUM("square", "circle"),
        defaultValue: "square",
      },
      radius: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      type: {
        type: Sequelize.ENUM("text", "color"),
        defaultValue: "text",
      },
      values: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("product_options");
  },
};
