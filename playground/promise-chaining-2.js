require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d5167cb27bc9b1bfd65a80f').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})