
module.exports = (sequelize, Datatypes) => {
    var Table = sequelize.define('Table', {
      tableId: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      customerName: {
        type: Datatypes.STRING,
        allowNull: false
      },
      tableStatus: {
        type: Datatypes.STRING,
        allowNull: false
      }
    })
    return Table
  }