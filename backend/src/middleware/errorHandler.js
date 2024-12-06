const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Erro de validação do Sequelize
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      error: "Validation Error",
      details: err.errors.map((e) => ({
        message: e.message,
        field: e.path,
        value: e.value,
      })),
    });
  }

  // Erro único do Sequelize (ex: email duplicado)
  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(409).json({
      error: "Conflict",
      message: "Resource already exists",
      details: err.errors.map((e) => ({
        message: e.message,
        field: e.path,
        value: e.value,
      })),
    });
  }

  // Erro personalizado com status code
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      error: err.name || "Error",
      message: err.message,
    });
  }

  // Erro padrão
  return res.status(500).json({
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "production"
        ? "An unexpected error occurred"
        : err.message,
  });
};

module.exports = errorHandler;
