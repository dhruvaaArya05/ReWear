exports.authenticateUser = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  req.userId = req.session.userId;
  next();
};