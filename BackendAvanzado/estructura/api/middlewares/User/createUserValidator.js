import joi from 'joi'

const createUserValidator = async (req, res, next) => {
    /**
     * 1. Crear schema ✅
     * 2. Validar req.body con el schema ✅
     * si todo sale bien --> next() ✅
     * en otro caso res.status(400) ✅
     * 3. Registrar el middleware ✅
     */

    const userSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required()
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

export { createUserValidator }