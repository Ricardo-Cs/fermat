const express = require('express');
const router = express.Router();

const users = require('./controllers/user.controller');

router.get("/users", users.findAll);


module.exports = router;