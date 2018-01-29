const config = require('../config/index');
const controllerHandler = require('./controllerHandler');
const express = require('express')
    , router = express.Router()
    , Question = require('../models/question');

router.get('/:id', controllerHandler(Question.getById, (req, res, next) => [req.params.id]));

if (config.enableChanges) {
    router.post('/', controllerHandler(Question.create, (req, res, next) => [req.body]));
}

module.exports = router;