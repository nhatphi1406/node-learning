import { Router } from 'express'
import { createCategory, getCategory, getAllCategory } from './controller'
const router = new Router()
router.get('/', getAllCategory)
router.get('/:id',  getCategory)
router.post('/', createCategory);
router.put('/', (req, res) => res.send('PUT USER'))
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router