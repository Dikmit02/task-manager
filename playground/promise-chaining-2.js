require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d5167cb27bc9b1bfd65a80f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount=async(id)=>{
    const delete_user=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return count
 }
 deleteTaskAndCount('5d51cd0b08fefb1d9742fd9e')
 .then((count)=>{
     console.log(count)

 })
 .catch((e)=>[
     console.log(e)
 ])