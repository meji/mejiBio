module.exports = (req, res, next) => {
    if (req.user.role === "Admin") return next();
    res.status(403).json({ message: "El usuario no es admin" });
  };
  