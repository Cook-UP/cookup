const menuItemSchema = new mongoose.Schema({
    iID: String,        //Unique identifier for item posting
    title: String,      //Title for item posting
    desc: String,       //Description
    tags: [],           //Tags (type of cuisine, dietary info, etc.)
    images: []          //Images uploaded by Chef user (will be references to S3 objects)
    
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
