import db from './../../services/sequelize'

const drink = db.drink

export const createFood = (req, res, next) => {
    const body = req.body
    // console.log(body)
    drink.create(body).then((data) => {
        // console.log(data)
       res.send(data)
    }).catch( err=> {
        res.status(404).send(err)
    })
}

  