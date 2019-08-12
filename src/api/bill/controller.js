import db from './../../services/sequelize'

const Bill = db.Bill
const BillDetail = db.BillDetail

export const createBill = (req, res, next) => {
    const body = req.body
    // console.log(body)
    // let bill = Object.keys(body).map(data => {
    //     console.log(data)
    //     bill.tableId = data.tableId,
    //     bill.customerNote = data.customerNote
    // });
    let bill = {
        tableId: body.tableId,
        customerNote: body.customerNote,
        billStatus: 1
    }
    let billDetail = body.billDetail
    // console.log(bill)
    Bill.create(bill).then((data) => {
        let billId = data.billId
        billDetail.forEach(item => {
            let data = {
                billId: billId,
                drinkId: item.drinkId,
                drinkQuantity: item.drinkQuantity,
                drinkPrice: item.drinkPrice
            }
            BillDetail.create(data).then(data => {
                res.status(200).send()
            }).catch(err => {
                res.status(404).json(err)
            })
        });
    }).catch(err => {
        res.status(404).send(err)
    })
}


export const getAllBill = (req, res, next) => {
    Bill.findAll(
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

export const getBill = (req, res, next) => {
    const billId = req.params.id
    Bill.findOne({
        where: { billId: billId }
        // include: [{
        //     model: Drink,
        //     as: "drink"
        // }],
    })
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json(err)
    })
}


export const updateBill = (req, res, next) => {
    const id = req.params.id
    const body = req.body
    Table.update(body, { where: { billId: id } }).then(data => {
        res.send(body)
    }).catch(err => {
        res.status(404).send(err)
    })
}
