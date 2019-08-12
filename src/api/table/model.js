
module.exports = (sequelize, Datatypes) => {
  var Table = sequelize.define('Table', {
    tableId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    customerName: {
      type: Datatypes.STRING
      // allowNull: false
    },
    tableStatus: {
      type: Datatypes.INTEGER,
      allowNull: false
    }
  })
  Table.associate = function (models) {
    models.Table.hasMany(models.Bill, {
      foreignKey: 'tableId',
      // targetKey: 'categoryId',
      as: 'bill'
    })
  }
  return Table
}