const Kitchen = require("./kitchenModel");
const MenuItem = require("./menuItemModel");

const orderSchema = new mongoose.Schema({
    oID: String,        //Unique identifier for item posting
    kitchen: Kitchen,    //Owning Kitchen
    item: MenuItem      //MenuItem
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
