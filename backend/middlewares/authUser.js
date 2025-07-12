exports.authenticateUser = (req, res, next) => {
  if (req.session.userId) {
    req.userId = req.session.userId;
    console.log("Authenticated user ID: ", req.userId);
    return next();
  } else {
    return res.status(401).json({
      message: "Unauthorized access"
    })
  }
}