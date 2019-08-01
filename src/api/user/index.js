import {
    Router
} from 'express'
// import { master, token } from '../../services/passport';
import {
    getUser
} from './controller';
import
bodymen, {errorHandler}
from 'bodymen'
import {
    stringify
} from 'querystring';
const router = new Router()
router.get('/', getUser)
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(id)
})
router.post('/', bodymen.middleware({
    username: {
        type: String,
        require: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 8
    }
}), (req, res) => {
    console.log(req.bodymen.body)
})
router.put('/', (req, res) => res.send('PUT USER'))
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router