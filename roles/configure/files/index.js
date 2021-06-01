const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end("Hello, God is good all the time")
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})