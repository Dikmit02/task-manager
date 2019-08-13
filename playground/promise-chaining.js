require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5d51c6537f5d2219de1b9555', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const UpadteageandCount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age})
    console.log(user)
    const count=await User.countDocuments({age})
    return count
}

UpadteageandCount('5d51c6537f5d2219de1b9555',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
