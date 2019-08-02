import db from './../../services/sequelize'

const Food = db.Food

export const createFood = (req, res, next) => {
    const body = req.body
    // console.log(body)
    Food.create(body).then((data) => {
        // console.log(data)
       res.send(data)
    }).catch( err=> {
        res.status(404).send(err)
    })
}

  