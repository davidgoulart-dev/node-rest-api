const http = require('http')

const server = http.createServer((request, response)=>{
if(request.method === 'GET' && /^\/hello\/\w+$/.test(request.url)){
    const [,, name] = request.url.split('/')
    response.writeHead(200)
    response.end(`Hello ${name}`)
    return

};
// get /hello -> Hello World
if(request.method === 'GET' && request.url.startsWith('/hello') ){
    response.writeHead(200)
    response.end('Hello World!')
    return 
}
// POST /echo
if(request.method === 'POST' && request.url.startsWith('/echo')  ){

    response.writeHead(200)
    request.pipe(response)
}


response.writeHead(404)
response.end('Resource not found\n')
})


server.listen(3000, '0.0.0.0', () => {
    console.log('Server Started')
})
