
// import {Sequelize} from 'sequelize'

module.exports = (sequelize, Datatypes) => {
    var drink = sequelize.define('drink', {
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
      },
      categories: {
        type: Datatypes.STRING,
        allowNull: false 
      }
    })
    return drink
  }