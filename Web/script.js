var http = require('http');

var server = http.createServer(function(req, res){
    const ht = ` <!DOCTYPE html>
    <html>
      <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        
      </head>
        <body>
        <form action="/script.js" method="GET">
          <div>
            <p>имя</p>
            <input id="username" name="username" type="text"/>
            </div>
             
            <div>
            <p>фамилия</p>
            <input id="surename" name="surename" type="text"/>
            </div>                                   
    
            <button type="submit" id="sub">отправить</button>
        </form>
        </body>
    </html>
    `;

    res.writeHead(200, {'Content-type': 'text/html; charset = utf-8'})
    res.end(ht);
    console.log(req.url);
});

server.listen(5500, '127.0.0.1');
console.log('я слежу за вами');