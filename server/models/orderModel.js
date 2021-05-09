const mongoose = require("mongoose");
const Kitchen = require("./kitchenModel");
const MenuItem = require("./menuItemModel");

const orderSchema = new mongoose.Schema({
    oID: String,        //Unique identifier for item posting
    name: String,
    address: String,
    uID: String,
    // kitchen: Kitchen.schema,    //Owning Kitchen
    kID: String,
    // items: [MenuItem.schema],      //MenuItem
    items: [{
        name: {type: String, required: true},
        quantity: {type: Number, required: true}
    }],
    price: Number,
}, {
    timestamps: {
        createdAt: 'created'
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
