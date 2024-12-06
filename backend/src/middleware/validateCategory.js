const validateCategory = (req, res, next) => {
  const { name, slug } = req.body;

  if (!name || !slug) {
    return res.status(400).json({
      message: "Name and slug are required",
    });
  }

  if (
    typeof req.body.use_in_menu !== "undefined" &&
    typeof req.body.use_in_menu !== "boolean"
  ) {
    return res.status(400).json({
      message: "use_in_menu must be a boolean",
    });
  }

  next();
};

module.exports = validateCategory;
