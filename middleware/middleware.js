const Project = require("../models/projectModel");
const Message = require("../models/messageModel");
const jwt = require("jsonwebtoken");

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "Boboyesecret", (err, decodedtoken) => {
      if (err) {
        res.redirect("/login");
      }
      if (decodedtoken) {
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

module.exports.get_projects1 = async (req, res, next) => {
  const projects = await Project.find({});
  res.locals.projects = projects;
  next();
};

module.exports.get_messages2 = async (req, res, next) => {
  const messages = await Message.find({});
  res.locals.messages = messages;
  next();
};
