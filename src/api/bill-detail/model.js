module.exports = (sequelize, Datatypes) => {
    var BillDetail = sequelize.define('BillDetail', {
        billDetailId: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        billId: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        drinkQuantity: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        drinkPrice: {
            type: Datatypes.INTEGER,
        }
    })

    BillDetail.associate = function (models) {
        models.BillDetail.belongsTo(models.Bill, {
            foreignKey: 'billId',
            // targetKey: 'categoryId',
            as: 'bill'

        })
    }

    BillDetail.associate = function (models) {
        models.BillDetail.belongsTo(models.Drink, {
            foreignKey: 'drinkId',
            as: "drink"
        })
    }

    return BillDetail
}