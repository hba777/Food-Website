const Item = require("../model/itemModel.js")
const Category = require("../model/categoryModel.js");

const getCategory = async (req, res) => {
    const {category} = req.params;

    try {
        const categoryData = await Category.findOne({
            name: category
        });
        console.log(categoryData);

        if(!categoryData){
            return res.status(404).json({message: "Category Not Found"})
        }
    
        const items = await Item.find({menuId: categoryData.menuId});
        console.log(items)
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({message: "Category Not Found"});
    }
}

module.exports = {
    getCategory
};