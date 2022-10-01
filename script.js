let host = '127.0.0.1';
let port = 8000;

let express = require('express');
let favicon = require('serve-favicon');
let path = require('path');
const open = require("open");


let app = express();

app.use(express.static(__dirname + '/'));
app.use(favicon(path.join(__dirname, 'image', 'favicon.ico')))

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
})

app.listen(port, host);

console.log(`Your app listening on: http://${host}:${port}`)
open(`http://${host}:${port}`);
