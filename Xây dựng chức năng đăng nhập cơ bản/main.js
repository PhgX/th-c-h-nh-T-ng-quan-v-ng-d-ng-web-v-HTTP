const http = require('http');

http.createServer((req, res) => {
    res.write(`<h1>Úm ba la</h1>`);
    res.end();
}).listen(8080, 'localhost', () => {
    console.log('sever is running');
})

