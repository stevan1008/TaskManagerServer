const express = require('express')
const connectDB = require('./db/connect')
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
require('dotenv').config()

const app = express()



const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks)
app.use(notFound)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is runnig on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

