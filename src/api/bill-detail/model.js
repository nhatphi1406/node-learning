module.exports = ( sequelize, Datatypes ) => {
    var BillDetail = sequelize.define('BillDetail', {
        billId: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        drinkId: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        drinkQuantity: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    })
    
    return BillDetail
}