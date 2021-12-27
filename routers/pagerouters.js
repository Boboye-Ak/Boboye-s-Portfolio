const express = require("express");
const upload = require("../configs/multer");
const {
  intro_get,
  about_get,
  addproject_get,
  contact_get,
  login_get,
  portfolio_get,
  login_post,
  addproject_post,
  get_projects2,
  get_deleteproject,
  post_deleteprojects,
  contact_post,
  get_messages,
} = require("../controllers/pageController");
const {
  requireAuth,
  get_projects1,
  get_messages2,
} = require("../middleware/middleware");

const router = express.Router();

router.get("/intro", intro_get);
router.get("/about", about_get);
router.get("/addproject", requireAuth, addproject_get);
router.get("/contact", contact_get);
router.get("/login", login_get);
router.get("/portfolio", get_projects1, portfolio_get);
router.get("/getprojects", get_projects2);
router.post("/login", login_post);
router.post("/addproject", upload.single("myimage"), addproject_post);
router.get("/deleteproject", [requireAuth, get_projects1], get_deleteproject);
router.post("/deleteproject", post_deleteprojects);
router.post("/contact", contact_post);
router.get("/messages", [requireAuth, get_messages2], get_messages);

module.exports = router;
