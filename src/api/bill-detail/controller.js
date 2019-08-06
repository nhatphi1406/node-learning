import db from './../../services/sequelize'

const BillDetail = db.BillDetail

export const createBillDetail = (req, res, next) => {
    const body = req.body
    BillDetail.create(body).then((data) => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}


export const getAllBillDetail = (req, res, next) => {
    BillDetail.findAll(
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

// export const getBillDetail = (req, res, next) => {
//     const billId = req.params.id
//     BillDetail.findOne({
//         where: { billId: billId },
//         // include: [{
//         //     model: Category,
//         //     as: "category"
//         // }]
//     }).then(data => {
//         res.status(200).json(data)
//     }).catch(err => {
//         res.status(404).json(err)
//     })
// }


// export const updateBill = (req, res, next) => {
//     const id = req.params.id
//     const body = req.body
//     Table.update(body, { where: { billId: id } }).then(data => {
//         res.send(body)
//     }).catch(err => {
//         res.status(404).send(err)
//     })
// }


export const deleteBillDetail = (req, res, next) => {
    const billId = req.params.id
    const body = req.body
    BillDetail.delete({ where: { billId: billId } }).then(data => {
        res.send(body)
    }).catch(err => {
        res.status(404).send(err)
    })
}
