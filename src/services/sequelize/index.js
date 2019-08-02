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
var foodModel = sequelize['import']('../../api/food/model')
const db = {
    User: userModel,
    Food: foodModel
}

db.sequelize = sequelize;
db.sequelize = sequelize;

module.exports = db