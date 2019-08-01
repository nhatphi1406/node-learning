import {Users} from './model'

export const getUser = (req,res) => {
    res.send(Users)
}