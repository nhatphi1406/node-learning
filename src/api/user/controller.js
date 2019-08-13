// const User = db.User

export const createUser = (req, res, next) => {
    const body = req.body
    User.create(body).then((data) => {
       res.send(data)
    }).catch( err=> {
        res.status(404).send(err)
    })
}

  