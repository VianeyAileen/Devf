import joi from 'joi'

const updateTicketValidator = async (req, res, next) => {
    const ticketSchema = joi.object({
        subtotal: joi.number(),
        tax: joi.number(),
        total: joi.number(),
        items: joi.array().min(1),
        user: joi.array().min(1)
    })

    try {
        await ticketSchema.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(400).json({
            msg: 'Invalid inputs',
            error
        })
        
    }
}

export { updateTicketValidator }