import {Category} from './model'

export const createCategory = (req, res, next) => {
    var newCategory = new Category(req.body)
    // console.log(body)
    newCategory.save().then(item => {
        res.status(200).send(item)
    })
    .catch(err=> {
        console.log(err)
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