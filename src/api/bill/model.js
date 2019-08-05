module.exports = (sequelize, Datatypes) => {
    var Bill = sequelize.define('Bill', {
        billId: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tableId: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        customerNote: {
            type: Datatypes.STRING,
        }
    })

    return Bill
}