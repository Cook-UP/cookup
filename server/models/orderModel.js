const mongoose = require("mongoose");
const Kitchen = require("./kitchenModel");
const MenuItem = require("./menuItemModel");

const orderSchema = new mongoose.Schema({
    oID: String,        //Unique identifier for item posting
    kitchen: Kitchen.schema,    //Owning Kitchen
    item: MenuItem.schema      //MenuItem
}, {
    timestamps: {
        createdAt: 'created'
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
