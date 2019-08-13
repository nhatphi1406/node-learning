

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
        {
            include: [
                {
                    model: Bill,
                    limit: 1,
                    as: 'bill',
                    order: [['createdAt', 'DESC']]
                }
            ]
        }
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
        include: [
            {
                model: Bill,
                as: 'bill',
                limit: 1,
                order: [['createdAt', 'DESC']],
                required: false,
            }
        ],

    }).then(data => {
        let table = data.toJSON()
        res.status(200).json(data)
    })
    // .then(table => {
    //     // if (!table.bill[0].billId) {
    //     //     res.status(200).json(table)
    //     // }
    //     // else {
    //     //     const billId = table.bill[0].billId
    //     //     BillDetail.findAll({
    //     //         where: { billId: billId },
    //     //         include: [{
    //     //             model: Drink,
    //     //             as: "drink"
    //     //         }],
    //     //     }).then(item => {
    //     //         let billDetail = {
    //     //             billDetail: item
    //     //         }
    //     //         let tableDetail = Object.assign({}, table, billDetail)
    //     //         res.status(200).json(tableDetail)
    //     //     }).catch(err => {
    //     //         res.status(404).json("err")
    //     //     })
    //     // }
        
    // })
    .catch(err => {
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
