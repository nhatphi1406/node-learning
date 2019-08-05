
module.exports = (sequelize, Datatypes) => {
  var User = sequelize.define('User', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: Datatypes.STRING,
      allowNull: false,
      unique:true,
    },
    userPassword: {
      type: Datatypes.STRING,
      allowNull: false
    },
    userRole: {
      type: Datatypes.STRING,
      allowNull: false
    }
  })
  return User
}