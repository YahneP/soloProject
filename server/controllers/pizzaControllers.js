const PizzaShop = require('../models/PizzaShop');

module.exports = {
    findAll: (req, res) => {
        PizzaShop.find()
            .then( allPizzas => res.json(allPizzas))
            .catch( err => res.status(400).json(err));
    },
    findOnePizza: (req, res) => {
        PizzaShop.findById(req.params.id)
        .then( onePizza => res.json(onePizza))
        .catch( err => res.status(400).json(err))
    },
    
    createPizza: (req, res) => {
        PizzaShop.create(req.body)
        .then( newPizza => res.json(newPizza))
        .catch( err => res.status(400).json(err));
    },
    updatePizza: (req, res) => {
        PizzaShop.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then( updatePizza => res.json(updatePizza))
            .catch( err => res.status(400).json(err));
    },

    delete: (req, res) => {
        PizzaShop.findByIdAndDelete(req.params.id)
            .then(deletedOrder => res.json(deletedOrder))
            .catch( err => res.status(400).json(err));
    }
}