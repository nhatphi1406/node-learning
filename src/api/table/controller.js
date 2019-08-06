import db from './../../services/sequelize'

const Table = db.Table

export const createTable = (req, res, next) => {
    const body = req.body
    // console.log(body)
    Table.create(body).then((data) => {
        // console.log(data)
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}


export const getAllTable = (req, res, next) => {
    Table.findAll(
        // {
        //     include: [
        //         {
        //             model: Category,
        //             as: "category"
        //         }
        //     ]
        // }
    ).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}

export const getTable = (req, res, next) => {
    const tableId = req.params.id
    Table.findOne({
        where: { tableId: tableId },
        // include: [{
        //     model: Category,
        //     as: "category"
        // }]
    }).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}

export const updateTable = (req, res, next) => {
    const id = req.params.id
    const body = req.body
    Table.update(body, { where: { tableId: id } }).then(data => {
        res.send(body)
    }).catch(err => {
        res.status(404).send(err)
    })
}
