import User from "../models/User.js"
import config from '../config/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'

const register = async (req, res) => {
    try {
        // hashea el password
        const hashed = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashed

        const user = await User.create(req.body)

        user.password = undefined

        return res.json({
            msg: 'User created succesfully',
            user,
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error trying register the user, try later'
        })
    }
}

const login = async (req, res) => {
    const { body } = req
    if (!body.password || !body.email) {
        return res.status(400).json({
            msg: 'Please enter an email and password'
        })
    }

    try {
        const user = await User.findOne({
            email: body.email
        })

        if (!user) {
            return res.status(403).json({
                msg: 'Invalid credentials'
            })
        }

        const isValid = await bcrypt.compare(body.password, user.password)

        if (!isValid) {
            return res.status(403).json({
                msg: 'Invalid credentials'
            })
        }

        const payload = {
            userId: user.id
        }

        const token = jwt.encode(payload, config.jwtSecret)

        return res.json({
            msg: 'Login succesfully',
            token
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Error login the user, try later',
            error
        })
    }
}

export { register, login }