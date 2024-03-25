const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const path = require('path');
const port = 9000;
const ejs = require('ejs');

app.set('views',__dirname + '/public/views');
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
	res.render('index')
})

server.listen(port,(req,res) => {
	console.log(`Listening to port: ${port}`)
})
