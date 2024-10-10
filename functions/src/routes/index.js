const express = require("express");
const { sendEmailController } = require("../controllers/emailControllers");

const router = express.Router();

router.post("/send-email", sendEmailController);
router.get("*", (_, res) => {
  return res.status(404).send("Route not found");
});

module.exports = router;
