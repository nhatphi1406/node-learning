
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
    return Table
  }