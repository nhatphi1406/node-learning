import Sequelize, {
    Model
} from 'sequelize'
import {
    mysql
} from './../../config'

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    host: 'localhost',
    dialect: 'mysql'
});

var userModel = sequelize['import']('../../api/user/model');
var drinkModel = sequelize['import']('../../api/drink/model');
var billModel = sequelize['import']('../../api/bill/model');
var billDetailModel = sequelize['import']('../../api/bill-detail/model');
var categoryModel = sequelize['import']('../../api/category/model');
var tableModel = sequelize['import']('../../api/table/model');


const db = {
    User: userModel,
    Drink: drinkModel,
    Bill: billModel,
    BillDetail: billDetailModel,
    Category: categoryModel,
    Table: tableModel
}

db.sequelize = sequelize;
db.sequelize = sequelize;

Object.keys(db).forEach(modelName => {
    if(db[modelName].associate){
        db[modelName].associate(db)
    }
})

module.exports = db