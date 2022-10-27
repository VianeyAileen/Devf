import Item from "../models/Item.js"

// Create a new item
const create = async (req, res) => {
    try {
        const item = await Item.create(req.body)
        return res.json({
            msg: 'Item created succesfully',
            item
        })        
    } catch (error) {
        return res.status(500).json({
            msg: 'Error creating the item',
            error,
        })
    }
}

// Find all the items
const read = async (req, res) => {
    try {
        const items = await Item.find(req.query)
        return res.json({
            msg:'Items found',
            items
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error finding the items',
            error
        })
        
    }
}

// Find an item by its ID
const readById = async (req, res) => {
    const { id } = req.params
    try {
        const itemId = await Item.findById(id)
        return res.json({
            msg: 'Item found',
            itemId
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error finding the item by id',
            error
        })
    }
}

// Update an item by its ID
const update = async (req, res) => {
    const { id } = req.params

    try {
        const updateItem =  await Item.findByIdAndUpdate(id, req.body,{
            new: true
        })
        return res.json({
            msg: 'Item updated succesfully',
            updateItem
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error updating the item',
            error
        })
    }
}

// Remove an item by its ID
const remove = async (req, res) => {
    const { id } = req.params
    try {
        const itemId = await Item.findByIdAndDelete(id)
        return res.json({
            msg: 'Item deleted succesfully',
            itemId
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error deleting the item by id',
            error
        })
    }
}

export {create, read, readById, update, remove}