const http = require('http');


const port = 3000;

const server = http.createServer((req, res) => {
    
    let categoria = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

  if(categoria == '/tecnologia') {
   
    res.end("Noticias sobre tecnologia"); 
  
    }else if(categoria == '/moda') {
    
        res.end("Noticias sobre moda"); 
  
    }else {
    res.end('Voce esta na pagina principal');
    res.end('Hello World');
  }
  
}).server.listen(port);
