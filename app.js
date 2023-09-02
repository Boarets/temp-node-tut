const { error } = require('console');
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to my HomePage')
    }
    if(req.url === '/about'){
        res.end('About page')
    }
    res.end(`<p>Error Page,</p><a href="/">Go back home</a>`)
})

server.listen(4000)