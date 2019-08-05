import { Router } from 'express'
import user from '../api/user'
import auth from '../api/auth'
import drink from '../api/drink'
import category from '../api/category'
import bill from '../api/bill'
import billDetail from '../api/bill-detail'
import table from '../api/table'

const router = new Router()
router.use('/users', user)
router.use('/auth',auth)
router.use('/drink', drink)
router.use('/category', category)
router.use('/bill', bill)
router.use('/bill-detail', billDetail)
router.use('/table', table)

export default router