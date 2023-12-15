const mongoose = require('mongoose');

const PizzaShopSchema = new mongoose.Schema({
    method: {
        type: String,
        required: [true, "Method is required"],
    },
    
    size:{
        type: String,
        required: [true, "Size is required"],
    },

    crust:{
        type: String,
        required: [true, "Crust is required"],

        
    },

    qty:{
        type: Number,
        required: [true, "Qty is required"],

    },

    toppings:{
        type: String,
        required: [true, "Toppings is required"],

    },
    
    // price:{
    //     type: Number,
    // },

    // total:{
    //     type: Number,
    // },
    
    

}, {timestamps: true}) 

module.exports = (mongoose.model("PizzaShop", PizzaShopSchema ));
