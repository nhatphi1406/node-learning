import Sequelize from 'sequelize'
import {mysql} from './../../config'

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    host: 'localhost',
    dialect: 'mysql'
});