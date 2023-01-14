const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/auth');

const {runValidation} = require('../validators')
const {userSignUpValidator} = require('../validators/auth')


router.post('/signup', userSignUpValidator, runValidation, signup);

module.exports = router;