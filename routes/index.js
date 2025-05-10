const routes = require("express").Router();
const controller = require("../controllers")


routes.get("/", controller.greet)
routes.get("/arewa", controller.greetArewa)

module.exports = routes