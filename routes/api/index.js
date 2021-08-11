const router = require('express').Router();
const pizzaRouters = require('./pizza-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRouters);

module.exports = router;