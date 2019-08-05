import { Router } from 'express'
import { createDrink, getAllDrink, getDrink } from './controller'
const router = new Router()
router.get('/', getAllDrink)
router.get('/:id',getDrink )
router.post('/', createDrink);
router.put('/', (req, res) => res.send('PUT USER'))
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router