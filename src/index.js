import express from '../src/services/express'
import { port, ip , env, apiRoot} from './config';
import router from './api/index'
import db from './services/sequelize'
const app = express(apiRoot, router)



db.sequelize.sync().then(()=> {
    console.log('init db')
}).catch(err => {
    console.log(err)
})

app.listen(port, () => console.log(`Server listening on http://%s:%d, in %s mode`, ip, port, env))