const express = require('express');
const { register, login, uploadProfileImage } = require('../controllers/authController');
const router = express.Router();

router.post('/register', uploadProfileImage, register);
router.post('/login', login);

module.exports = router;
