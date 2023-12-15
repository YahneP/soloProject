const pizzaShopController = require('../controllers/pizzaControllers');

module.exports = app => {
    app.get('/api/pizzaShop', pizzaShopController.findAll);
    app.get('/api/pizzaShop/:id', pizzaShopController.findOnePizza);
    app.post('/api/pizzaShop', pizzaShopController.createPizza);
    app.put('/api/pizzaShop/:id', pizzaShopController.updatePizza);   
    app.delete("/api/pizzaShop/:id", pizzaShopController.delete);

}
