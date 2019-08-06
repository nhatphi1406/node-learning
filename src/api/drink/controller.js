import db from './../../services/sequelize'

const Drink = db.Drink
const Category = db.Category

export const createDrink = (req, res, next) => {
    const body = req.body
    // console.log(body)
    Drink.create(body).then((data) => {
        // console.log(data)
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}


export const getAllDrink = (req, res, next) => {
    Drink.findAll(
        {
            include: [
                {
                    model: Category,
                    as: "category"
                }
            ]
        }
    ).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}

export const getDrink = (req, res, next) => {
    const drinkId = req.params.id
    Drink.findOne({
        where: { id:drinkId },
        include: [{
            model: Category,
            as: "category"
        }]
    }).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}