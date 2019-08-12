require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5d51c6537f5d2219de1b9555', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})