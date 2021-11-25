const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    res.setHeader('Content-type', 'text/plain')
    res.write('Im writing node bitches!!! and Hannah is here with me')
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})