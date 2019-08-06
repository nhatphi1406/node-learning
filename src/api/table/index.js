import { Router } from 'express'
import {createTable, getAllTable, getTable, updateTable} from './controller'

const router = new Router()
router.get('/', getAllTable)
router.get('/:id', getTable)
router.post('/', createTable);
router.put('/:id', updateTable)
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router   