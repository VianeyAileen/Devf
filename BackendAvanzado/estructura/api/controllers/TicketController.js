import Ticket from "../models/Ticket.js"

// Create a new ticket
const create = async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body)
        return res.json({
            msg: 'Ticket created succesfully',
            ticket
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error creating the ticket',
            error,
        })
    }
}

// Find all tickets
const read = async (req, res) => {
    try {
        const tickets = await Ticket.find(req.query)
            .populate('items')
            .populate('user')
        return res.json({
            msg: 'Tickets found',
            tickets
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error finding the tickets',
            error
        })
    }
}

// Find a ticket by its ID
const readById = async (req, res) => {
    const {id} = req.params
    try {
        const ticketId = await Ticket.findById(id)
            .populate('items')
            .populate('user')
        
        if (!ticketId) {
            return res.json({
                msg: 'Ticket not found'
            })
        }
        return res.json({
            msg: 'Tickets found',
            ticketId
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error finding the tickets',
            error
        })
    }
}

// Update a ticket by its ID
const update = async (req, res) => {
    const {id} = req.params
    try {
        const updateTicket = await Ticket.findByIdAndUpdate(id, req.body,{
            new:true
        })
            .populate('items')
            .populate('user')
        
        if (!updateTicket) {
            return res.json({
                msg: 'Ticket not found'
            })
        }
        return res.json({
            msg: 'Ticket updates succesfully',
            updateTicket
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error updating the ticket',
            error
        })
    }
}

// Remove a ticket
const remove = async (req, res) => {
    const { id } = req.params
    try {
        const removeTicket = await Ticket.findByIdAndDelete(id)
        return res.json({
            msg: 'Ticket deleted succesfully',
            removeTicket
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error deleting ticket',
            error
        })
    }
}

const calculateById = async (req, res) => {
    try {
        let subTotal
        let total
        let tax

        const {id} = req.params

        const ticket = await Ticket.findById(id).populate('items')

        subTotal = ticket.items.reduce((anterior, itemActual) => {
            return anterior + itemActual.price
        }, 0)

        tax = subTotal * 0.16

        total = subTotal + tax
        
        const updated = await Ticket.findByIdAndUpdate(id, {
            subTotal,
            total,
            tax
        },
        {
            new: true
        })

        return res.json({
            msg: "Ticket calculated succesfully",
            updated
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error calculating the ticket',
            error
        })
    }
}

export { create, read, readById, update, remove, calculateById }