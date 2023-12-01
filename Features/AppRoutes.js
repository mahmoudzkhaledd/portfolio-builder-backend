const appRoute = require('express').Router();
const authRoutes = require('./Auth/AuthRoutes');
const coreRoutes = require('./Core/CoreRoutes');

const { userValidatorMiddleware } = require('../middlewares/UserValidatorMiddleware');

appRoute.use(authRoutes);
appRoute.use(userValidatorMiddleware);
appRoute.use(coreRoutes);


appRoute.all('*', (req, res) => {
    res.status(404).json({ msg: "Can't find this route" });
});

module.exports = appRoute;