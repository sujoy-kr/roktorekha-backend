const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const { PORT } = require('./config/env_config')
const connectDB = require('./config/db_config')

;(async () => {
    try {
        // Connect to database
        await connectDB()
        console.log('Connected to database')

        // Start node server
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
})()
