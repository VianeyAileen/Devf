import User from '../models/User.js'

// Create a new user
const create = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.json({
            msg: 'User created succesfully',
            user
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error creating the user',
            error,
        })
    }
}

// Find all users
const read = async (req, res) => {
    try {
        const users = await User.find(req.query)
        return res.json({
            msg:'Users found',
            users
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error finding the users',
            error
        })
        
    }
}

// Find a User by its ID
const readById = async (req, res) => {
    const { id } = req.params
    try {
        const userId = await User.findById(id)
        return res.json({
            msg: 'User found',
            userId
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error finding user by id',
            error
        })
    }
}

// Update a User by its ID
const update = async (req, res) => {
    const { id } = req.params

    try {
        const updateUser =  await User.findByIdAndUpdate(id, req.body,{
            new: true
        })
        return res.json({
            msg: 'User updated succesfully',
            updateUser
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error updating user',
            error
        })
    }
}

// Remove a user
const remove = async (req, res) => {
    const { id } = req.params
    try {
        const removeUser = await User.findByIdAndDelete(id)
        return res.json({
            msg: 'User deleted succesfully',
            removeUser
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error deleting user',
            error
        })
    }
}

export {create, read, readById, update, remove}