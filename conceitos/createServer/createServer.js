const http = require('http')

http.createServer((req,res)=>{
    res.write("Deu bom familia!")
    res.end()
}).listen(5000)