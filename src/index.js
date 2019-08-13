import express from './services/express'
import { port, ip, env, apiRoot } from './config';
import router from './api/index'
// import db from './services/sequelize'
const app = express(apiRoot, router)


//Ép Mongoose sử dụng thư viện promise toàn cục
//Lấy kết nối mặc định

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)

app.listen(port, () => console.log(`Server listening on http://%s:%d, in %s mode`, ip, port, env))