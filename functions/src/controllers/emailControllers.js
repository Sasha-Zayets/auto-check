const logger = require("firebase-functions/logger");
const { sendEmailToOwner } = require("../services/email.service");

async function sendEmailController(req, res) {
  try {
    const { email, name } = req.body;

    await sendEmailToOwner({ name, email });

    return res.status(200).json({ email, name });
  } catch (e) {
    logger.error(e);
    return res.status(500).json({ error: e.message || "Something went wrong" });
  }
}

module.exports = { sendEmailController };
