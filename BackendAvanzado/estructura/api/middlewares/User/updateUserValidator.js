import joi from 'joi'

const updateUserValidator = async (req, res, next) => {
    const userSchema = joi.object({
        name: joi.string(),
        email: joi.string().email()
    })

    try {
        await userSchema.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(400).json({
            msg: 'Invalid inputs',
            error
        })
    }
}

export { updateUserValidator }