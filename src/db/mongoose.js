const mongoose=require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://localhost/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const User=mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }

 })

const me=new User({
    name:'Andrew',
    email:'MYDIKSHA@GAMIL.COM',
    password: 'phone098!',
    age:23
})

me.save()
.then(()=>{
    console.log(me)
})
.catch((error)=>{
    console.log('Error!!',error)
})


const Task=mongoose.model('Task',{
    description:{
        type:String,
        required: true,
        trim: true
    },
    completed:{
        type:Boolean,
        default: false
    }
})

const task=new Task({
    description:'Task1',
    completed:true
})
task.save()
.then((task)=>{
    console.log(task)
})
.catch((error)=>{
    console.log('Error',error)
})