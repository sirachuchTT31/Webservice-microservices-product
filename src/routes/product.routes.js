const graphqlController = require('../graphql/controllers/product.controller');

var router = require('express').Router();

router.get("/glaphql", [
    graphqlController.graphqlProducts
]);



module.exports = router;

