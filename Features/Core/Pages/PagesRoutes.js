const appRouter = require('express').Router();
const { addPage } = require("./services/AddPage");
const { getUserPages } = require("./services/GetUserPages");
appRouter.post('/', addPage);
appRouter.get('/', getUserPages);
module.exports = appRouter;