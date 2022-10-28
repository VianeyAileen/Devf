import joi from 'joi'

const createTicketValidator = async (req, res, next) => {
    const ticketSchema = joi.object({
        subtotal: joi.number().required(),
        tax: joi.number().required(),
        total: joi.number().required(),
        items: joi.array().min(1).required(),
        user: joi.array().min(1).required()
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

export { createTicketValidator }