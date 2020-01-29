require('../src/db/mongoose.js')
const Task = require('../src/models/task.js')

// Task.findByIdAndDelete('').then((result) => {
//     console.log(result)

//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})