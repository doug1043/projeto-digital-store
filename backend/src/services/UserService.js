const { User } = require("../config/database");
const bcrypt = require("bcrypt");

const userService = {
  async getById(id) {
    const user = await User.findByPk(id, {
      attributes: ["id", "firstname", "surname", "email"],
    });
    if (!user) throw new Error("User not found");
    return user;
  },

  async create(userData) {
    const { password, confirmPassword, ...rest } = userData;

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      ...rest,
      password: hashedPassword,
    });

    const { password: _, ...userWithoutPassword } = user.get();
    return userWithoutPassword;
  },

  async update(id, userData) {
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    await user.update(userData);
    return true;
  },

  async delete(id) {
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    await user.destroy();
    return true;
  },
};

module.exports = userService;
