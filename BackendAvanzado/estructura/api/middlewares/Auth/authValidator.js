import jwt from 'jwt-simple'
import config from '../../config/index.js'
import User from '../../models/User.js'
/**
 * 1. Verifica que el request tenga token [headers]
 *    Si no hay token status 403 --> falta authorization ✅
 * 2. Valida que el token sea válido, si no regresamos un 403. ✅
 * 3. Valida que exista la propiedad userId y que exista un usuario
 *    en la BD con ese ID.
 * 4. next()
 */
const authValidator = async (req, res, next) => {
    // Obtain the authorization header and rename it to token
    const { authorization: token } = req.headers
    // If token is null, send an erro message
    if (!token) {
        return res.status(403).json({
            msg: 'Authorization header missing'
        })
    }

    try {
        // Check if the token can be decoded with the existed key
        const payload = jwt.decode(token, config.jwtSecret)
        //  If the token is valid, extract userId inside payload
        const { userId } = payload

        // If userId doesn't exist inside the payload
        if (!userId) {
            return res.status(403).json({
                msg: 'Invalid token'
            })
        }

        // If userId exist, find inside the DB
        const user = await User.findById(userId)

        // If there's no user inside the DB
        if (!user) {
            return res.status(403).json({
                msg: 'Invalid token'
            })
        }

        // Exist the middleware to the next string, if everything goes good
        next()
    } catch (error) {
        // If the token cann't be decodified with the key or it was an invalid token
        return res.status(403).json({
            msg: 'Invalid token',
        })
    }
}

export { authValidator }