const express=require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task=require('./models/task')

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/users',(req,res)=>{
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})
app.post('/tasks',(req,res)=>{
    const user = new Task(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})


app.listen(3000)