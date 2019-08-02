import { Router } from 'express'
import { createFood } from './controller'
const router = new Router()
router.get('/',(req, res) => res.send('PUT USER'))
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(id)
})
router.post('/', createFood);
router.put('/', (req, res) => res.send('PUT USER'))
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router