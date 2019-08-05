import db from './../../services/sequelize'

const Category = db.Category

export const createCategory = (req,res, next) => {
    const body = req.body
    Category.create(body).then((data) => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}