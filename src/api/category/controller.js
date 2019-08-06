import db from './../../services/sequelize'

const Category = db.Category
const Drink = db.Drink

export const createCategory = (req, res, next) => {
    const body = req.body
    Category.create(body).then((data) => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}
export const getCategory = (req, res, next) => {
    const categoryId = req.params.id
    Category.findOne(
        {
            where: { categoryId: categoryId },
            include: [{
                model: Drink
            }]
        }
    ).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}

export const getAllCategory = (req, res, next) => {
    // const categoryId = req.params.id
    Category.findAll(
        {
            include: [{
                model: Drink
            }]
        }
    ).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}