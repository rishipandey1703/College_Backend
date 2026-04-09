const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', 'utf8', (err, htmlContent) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error')
                return
                }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(htmlContent)
        })
    } 
    else if(req.url ==='/styles.css'){
        fs.readFile('styles.css', 'utf8', (err,cssContent)=>{
            if (err){
                res.statusCode = 500;
                res.end('Internal Server Error')
                return
            }
        })
        res.setHeader('Content-Type', 'text/css')
        res.end(cssContent)
    }
    else {
        res.statusCode=500
        res.end('Not Found')
    }
})

const PORT = 3001
server.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}/')
})
