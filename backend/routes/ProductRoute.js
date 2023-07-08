const express = require('express');
const router = express.Router();
const { getAllProdcuts } = require('../controller/ProductController');

router.route("/products").get(getAllProdcuts);

module.exports = router;