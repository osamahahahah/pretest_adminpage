const express = require('express');
const router = express.Router();
const produkController = require('../controller/produk.controller');
const pembelianController = require('../controller/pembelian.controller');


router.get('/', (req, res) => {
    res.redirect('/produk');
});


router.get('/produk', produkController.index);
router.post('/produk', produkController.store);
router.post('/produk/delete/:id', produkController.delete);


router.get('/pembelian', pembelianController.index);
router.get('/pembelian/create', pembelianController.create);
router.post('/pembelian', pembelianController.store);
router.post('/pembelian/cancel/:id', pembelianController.cancel);

module.exports = router;
