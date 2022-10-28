import joi from 'joi'

const updateItemValidator = async (req, res, next) => {
    const itemSchema = joi.object({
        name: joi.string(),
        price: joi.number(),
        stock: joi.number()
    })

    try {
        await itemSchema.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(400).json({
            msg: 'Invalid inputs',
            error
        })
    }
}

export { updateItemValidator }