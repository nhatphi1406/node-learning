import { Router } from 'express'
import user from '../api/user'
import auth from '../api/auth'
import drink from '../api/drink'

const router = new Router()
router.use('/users', user)
router.use('/auth',auth)
router.use('/foods', drink)


export default router