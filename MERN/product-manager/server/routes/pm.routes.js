const PmController = require('../controllers/pm.controller');

module.exports = app => {
    app.get('/api/products', PmController.getProducts);
    app.post('/api/createProduct', PmController.createProduct);
    app.get('/api/products/:_id', PmController.getProductById);
    app.put('/api/updateProduct/:_id', PmController.updateProduct);
    app.delete('/api/deleteProduct/:_id', PmController.deleteProduct)
}