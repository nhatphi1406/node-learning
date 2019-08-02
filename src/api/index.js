import { Router } from 'express'
import user from '../api/user'
import auth from '../api/auth'
import food from '../api/food'

const router = new Router()
router.use('/users', user)
router.use('/auth',auth)
router.use('/foods', food)


export default router