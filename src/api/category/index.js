import { Router } from 'express'
import { createCategory } from './controller'
const router = new Router()
router.get('/',(req, res) => res.send('PUT USER'))
router.get('/:id', (req, res) => res.send('PUT USER'))
router.post('/', createCategory);
router.put('/', (req, res) => res.send('PUT USER'))
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router