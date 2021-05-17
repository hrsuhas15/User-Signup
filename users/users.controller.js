const express = require('express');
const router = express.Router();
const userService = require('./user.service');


// routes
router.post('/signup', signup);
router.get('/', getAll);

module.exports = router;


function signup(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}
