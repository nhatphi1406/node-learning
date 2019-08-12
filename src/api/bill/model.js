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
        },
        customerNote: {
            type: Datatypes.STRING,
        },
        billStatus: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    })
    Bill.associate = function (models) {
        models.Category.hasMany(models.BillDetail, {
            foreignKey: 'billId',
            // targetKey: 'categoryId'
        })
    }
    Bill.associate = function (models) {
        models.Category.belongsTo(models.Table, {
            foreignKey: 'tableId',
            // targetKey: 'categoryId'
        })
    }
    return Bill
}