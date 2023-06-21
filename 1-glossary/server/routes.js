const express = require('express');
const router = express.Router();
const controller = require('./controllers.js');

router.post('/words', controller.post);
router.get('/words', controller.get);
router.put('/words', controller.update);
router.delete('/words', controller.delete);

module.exports = router;
