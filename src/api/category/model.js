
module.exports = (sequelize, Datatypes) => {
    var Category = sequelize.define('Category', {
      categoryId: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      categoryName: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true
      },
      categoryStatus: {
        type: Datatypes.STRING,
        allowNull: false
      }
    })

    Category.associate = function(models) {
      models.Category.hasMany(models.Drink, {
        foreignKey: 'categoryId',
        // targetKey: 'categoryId'
      })
    }

    return Category
  }