import { Router } from 'express'
import {createBill, getAllBill, getBill, updateBill} from './controller'
const router = new Router()
router.get('/', getAllBill)
router.get('/:id', getBill)
router.post('/', createBill);
router.put('/', updateBill)
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router   