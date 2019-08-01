
import path from 'path'
import merge from 'lodash/merge'
const requireProcessEnv = name => {
    if (!process.env[name]) {
        throw new Error(`You must set the ${name} environment variable`)
    }
    return process.env[name]
}

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv-safe')
    dotenv.load({
        path: path.join(__dirname, '../.env'),
        sample: path.join(__dirname, '../.env.default')
    })
}

const config = {
    all: {
        env: process.env.NODE_ENV || 'development',
        root: path.join(__dirname, '..'),
        port: process.env.PORT || 3000,
        ip: process.env.IP || '0.0.0.0',
        apiRoot: process.env.API_ROOT || '',
    },
    development: {
        mysql: {
            database:'db-demo',
            username:'root',
            passowrd: null
        }
    },
    production: {
        ip: process.env.IP || undefined,
        port: process.env.PORT || 8080,
        mysql: {
            database: process.env.DATABASE || 'db-demo',
            username: process.env.USERNAME || 'root',
            passowrd: process.env.DBPASSWORD || null
        }
    }
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports