import { Drink } from './model'

export const createDrink = (req, res, next) => {
    var newDrink = new Drink(req.body)
    // console.log(body)
    newDrink.save().then(item => {
        res.status(200).send(item)
    })
        .catch(err => {
            console.log(err)
        })
}


export const getAllDrink = (req, res, next) => {
    Drink.find({ status: true })
        .populate('category')
        .exec(function (err, item) {
            if (err) return handleError(err);
            res.status(200).send(item)
            // in ra "The author is Bob Smith"
        });
}

export const getDrink = (req, res, next) => {
    const drinkId = req.params.id
    Drink.find({ id: drinkId })
        .populate('category')
        .exec(function (err, item) {
            if (err) return handleError(err);
            res.status(200).send(item)
            // in ra "The author is Bob Smith"
        });
}

export const updateDrink = (req, res, next) => {
    const drinkId = req.params.id
    const drink = req.body
    Drink.findByIdAndUpdate(drinkId, {
        name: drink.name,
        status: drink.status,
        pictures: drink.pictures,
        category: drink.cateogry

    },
        function (err, item) {
            if (err) {
                res.status(404).send(err)
            }
            else {
                res.status(200).send(item)
            }
        })
}