const express = require('express');
const router = express.Router();
const controller = require('./controllers.js');

router.post('/teams', controller.post);
router.get('/teams', controller.get);
router.put('/teams', controller.update);
router.delete('/teams', controller.delete);

module.exports = router;
