
// import {Sequelize} from 'sequelize'

module.exports = (sequelize, Datatypes) => {
  var Drink = sequelize.define('drink', {
    drinkId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    drinkName: {
      type: Datatypes.STRING,
      unique: true,
      allowNull: false
    },
    drinkPrice: {
      type: Datatypes.INTEGER,
      allowNull: false
    },
    drinkPictures: {
      type: Datatypes.STRING,
      get() {
        const pictures = this.getDataValue('drinkPictures');
        return pictures ? pictures.split(';') : "";
      },
      set(val) {
        this.setDataValue('drinkPictures', val.join(';'));
      },
    },
    drinkDetail: {
      type: Datatypes.STRING,
    }
  })

  Drink.associate = function (models) {
    models.Drink.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      // targetKey: 'categoryId',
      as: 'category'

    })
  }

  Drink.associate = function (models) {
    models.Drink.hasMany(models.BillDetail, {
      foreignKey: 'drinkId',
      as: "drink"
    })
  }

  return Drink
}