const express = require('express');
const productControllers = require('../controllers/product.controller.js');
const router = express.Router();

//  Add product to DB
router.post('/', productControllers.createProduct);

router.get('/', productControllers.getProducts);

router.get('/:id', productControllers.getProduct);

router.put('/:id', productControllers.updateProduct);

router.delete('/:id', productControllers.deleteProduct);

module.exports = router;