const userModel = require('../models/user.model');

async function findAll(req, res) {
    const users = await userModel.findAll();
    return res.json(users);
}

module.exports = {
    findAll
}