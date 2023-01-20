const { PORT } = require('./config/env_config')
const app = require('./app')

const http = require('http')
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
