
// import {Sequelize} from 'sequelize'

module.exports = (sequelize, Datatypes) => {
    var Drink = sequelize.define('drink', {
      id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
      },
      name: {
        type: Datatypes.STRING,
        unique:true,
        allowNull: false 
      },
      price: {
        type: Datatypes.INTEGER,
        allowNull: false 
      },
      pictures: {
        type: Datatypes.STRING,
        get() {
            return this.getDataValue('pictures').split(';')
        },
        set(val) {
           this.setDataValue('pictures',val.join(';'));
        },
      },
      detail: {
        type: Datatypes.STRING,
      }
    })

    Drink.associate = function(models) {
      models.Drink.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        // targetKey: 'categoryId',
        as: 'category'
        
      })
    }
    

    return Drink
  }