const Chef = require('../models/chefModel');
const getAllChefs = async (req, res) => {
    try {
        const chef = await Chef.find();
        res.status(200).json(chef);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Create a dish
const createChef = async (req, res) => {
    try {
        const newChef = await Chef.create(req.body);
        res.status(201).json(newChef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



module.exports = {
    getAllChefs,
    createChef
};