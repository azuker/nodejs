const config = require('../config/index');
const controllerHandler = require('./controllerHandler');
const express = require('express')
    , router = express.Router()
    , Quiz = require('../models/quiz')
    , Question = require('../models/question');

router.get('/', controllerHandler(Quiz.all, (req, res, next) => []));

router.get('/:id', controllerHandler(Quiz.getById, (req, res, next) => [req.params.id]));

router.get('/:id/questions', controllerHandler(Question.getByQuizId, (req, res, next) => [req.params.id]));

if (config.enableChanges) {
    router.patch('/:id', controllerHandler(Quiz.updateQuizResults, (req, res, next) => [req.params.id, req.body.score]));

    router.post('/', controllerHandler(Quiz.create, (req, res, next) => [req.body]));
}

module.exports = router;