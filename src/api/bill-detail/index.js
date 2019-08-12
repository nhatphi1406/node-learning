import { Router } from 'express'
import { getBillDetail, getAllBillDetail } from './controller'

const router = new Router()
router.get('/', getAllBillDetail)
router.get('/:id', getBillDetail)
router.post('/',  (req, res) => res.send('PUT USER'));
router.put('/', (req, res) => res.send('PUT USER'))
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router   