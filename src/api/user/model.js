
module.exports = (sequelize, Datatypes) => {
  var User = sequelize.define('User', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Datatypes.STRING
    }
  })
  return User
}