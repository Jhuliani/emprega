'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/curriculum-controller')
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.get('/:id', controller.getById);//colocar admin
router.post('/',/* authService.authorize,*/ controller.post);
router.put('/:id', authService.authorize, controller.put);
router.delete('/:id', controller.delete);
// router.post('/authenticate', controller.authenticate);
// router.post('/refresh-token', authService.authorize, controller.refreshToken);


module.exports = router;