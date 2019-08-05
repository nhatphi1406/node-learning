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
var drinkModel = sequelize['import']('../../api/drink/model')
const db = {
    User: userModel,
    Drink: drinkModel
}

db.sequelize = sequelize;
db.sequelize = sequelize;

module.exports = db