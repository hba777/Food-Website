const Item = require("../model/itemModel")

const getAllItems = async (req, res) => {
    const result = await Item.find().sort({
        //Descending order
        createAt: -1
    });

    res.status(200).json(result);
}

const getSearchedItems = async (req, res) => {
    //Extract q=apple part from url
    //Can use {q, category} for double queries extraction
    const {q} = req.query;
    try {
        let items;

        if(q) {
            //regex and i used for case insensitivity
            items = await Item.find({name: {$regex: q, $options: 'i'}})
        }
        res.status(200).json(items);

    } catch (error) {
        res.status(500).json({message: "No Items Found"});

    }
}

const getSingleItem = async (req, res) => {
    const {id} = req.params;

    try {
        const item = await Item.findById(id);
        res.json(item);
    } catch (error) {
        res.status(500).json({message: "No items found"});
    }
}
module.exports = {
    getAllItems,
    getSearchedItems,
    getSingleItem
}