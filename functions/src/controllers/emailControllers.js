const logger = require("firebase-functions/logger");
const { sendEmailToOwner } = require("../services/email.service");

async function sendEmailController(req, res) {
  try {
    const { name, phone } = req.body;

    await sendEmailToOwner({ name, phone });

    return res.status(200).json({ status: "ok" });
  } catch (e) {
    logger.error(e);
    return res.status(500).json({ error: e.message || "Something went wrong" });
  }
}

module.exports = { sendEmailController };
