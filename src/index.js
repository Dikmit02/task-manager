const express=require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// setting up
app.use(userRouter)
app.use(taskRouter)
app.listen(3000)