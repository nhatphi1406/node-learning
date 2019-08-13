import express from 'express'
import path from 'path'
// import { readFile } from '../file';
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'
import { errorHandler } from "bodymen"
import mongoose from 'mongoose'

export default (apiRoot, router) => {
    const app = new express()
    const logger = (req, res, next) => {
        console.log('A new request received at ' + new Date(Date.now()).toUTCString())
        next()
    }
    const html = path.join(__dirname, '../../../html')
    var dbUrl = 'mongodb://localhost:27017/admin'
    mongoose.connect(dbUrl);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', error => {console.log(error)})
    db.once('open',() => { console.log("Connect to Mongo")})

    app.use(logger)
    app.use(express.static(html))
    app.use(cors()) //middleware that can be used to enable CORS with various options 
    //cho phép JavaScript ở một trang web có thể tạo request lên một REST API được host ở một domain khác
    app.use(compression()) //nén provide gzip/deflate decrease the size of the response body 
    app.use(morgan('dev')) // HTTP request logger middleware
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(apiRoot, router)
    app.use(errorHandler())
    app.get('/',// logger, (req, res)=> {
        //     res.sendFile(path.join(html, 'index.html'))
        // })
        (req, res) => res.send('GET USER DETAIL'));

    app.get('/user', (req, res) => {
        readFile(path.join(__dirname, '../../user.json')).then(data => {
            return res.status(200).send(JSON.parse(data))
        }).catch(err => {
            return res.status(404).send(err)
        })
    })

    return app
}