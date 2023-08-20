import { Request, Response } from "express"

import express from 'express'
import passport from 'passport'
import * as User from '../controllers/user'

const router = express.Router()

router.get('/login', User.login)

router.get('/googleLogin', User.googleLogin)

router.get('/register', User.register)

router.get('/otp', User.otp)

router.put('/password', User.password)

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('google/redirect', passport.authenticate('google'), (req: Request, res: Response) => {
    // google redirect callback
})

export default router