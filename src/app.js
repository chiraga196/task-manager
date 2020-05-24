// const express = require('express')
// require('./db/mongoose')
// const User = require('./db/models/user')
// const Task = require('./db/models/task')

// const app = express()
// const port = process.env.PORT || 3000
// app.use(express.json())
// app.post('/users', (req, res) => {
//     const user = new User(req.body)

//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })
// app.get('/users/:id', (req, res) => {
//    // console.log(req.body)
//     const _id = req.params.id
//     User.findById(_id).then((user) => {
//         if(!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((e) => {
//         res.status(500).send(e)
//     })
// })


// app.post('/task', (req, res) => {
//     const task = new Task(req.body)
//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

// app.get('/task/:id', (req, res) => {
//      //console.log(req.params.id)
//      const _id = req.params.id
//      console.log(_id)
//      Task.findById(_id).then((user) => {
//          console.log(user)
//          if(!user) {
//              return res.status(404).send()
//          }
//          res.send(user)
//      }).catch((e) => {
//          res.status(500).send(e)
//      })
//  })


// app.listen(port, () => {
//     console.log("Server is up on " + port)
// })
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const app = express()
//db config
const db = require('../config/keys').MongoURI;

mongoose.connect(db, {useNewUrlParser: true}).then(() => {
    console.log("MongoDb connected")
}).catch(e => console.log(e));
//ejs
app.use(expressLayouts)
app.set('view engine', 'ejs')

//bodyparser
app.use(express.urlencoded({extended: false}))
//Routes
app.use('/', require('./routers/index'))
app.use('/users', require('./routers/users'))

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log("Server is up on " + PORT))