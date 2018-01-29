const config = require('../config/index');
const controllerHandler = require('./controllerHandler');
const express = require('express')
    , router = express.Router()
    , Setup = config.database.useSimulators
        ? require('../models/setupSimulator')
        : require('../models/setup');

router.get('/', controllerHandler(Setup.init, (req, res, next) => [req.query.clear]));

module.exports = router;