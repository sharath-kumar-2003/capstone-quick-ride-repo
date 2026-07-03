const express = require("express");
const router = express.Router();
const mailController = require("../controllers/mail.controller");
const { body } = require("express-validator");

router.post("/:userType/reset-password",  mailController.forgotPassword);


module.exports = router;
