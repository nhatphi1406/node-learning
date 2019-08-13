import { Router } from 'express'
import { createDrink, getAllDrink, getDrink, updateDrink } from './controller'
const router = new Router()
router.get('/', getAllDrink)
router.get('/:id',getDrink )
router.post('/', createDrink);
router.put('/:id', updateDrink)
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router