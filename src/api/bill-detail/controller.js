import db from './../../services/sequelize'

const BillDetail = db.BillDetail
const Drink = db.Drink

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
        {
            include: [{
                model: Drink,
                as: "drink"
            }]
        }
    ).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}

export const getBillDetail = (req, res, next) => {
    const billDetailId = req.params.id
    BillDetail.findOne({
        where: { billDetailId: billDetailId },
        include: [{
            model: Drink,
            as: "drink"
        }]
    }).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}


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
