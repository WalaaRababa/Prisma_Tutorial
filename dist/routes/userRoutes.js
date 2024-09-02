"use strict";
const { Router } = require('express');
const userRoute = Router();
const userController = require('../controllers/userController');
userRoute.post('/', userController.createUser);
userRoute.get('/', userController.getAllUser);
module.exports = userRoute;
