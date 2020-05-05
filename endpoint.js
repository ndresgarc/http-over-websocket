
'use strict';

/* REQUIRE */
const ws = require('ws');
const fs = require('fs');
const http = require('http');
const httpProxy = require('http-proxy');


/* GLOBAL */
let config = {};
let socket;

/* CONFIG */
fs.readFile('config.json', (error, data) => {
    if (error) throw error;
    config = JSON.parse(data);
    init(config);
});

/* INIT */

var server = http.createServer(function(req, res) {
  console.log(req.url);
  socket.send(config.endpoint.id + '-' + req.url);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();

  
  /* WEBSOCKET CODE EXECUTION HERE */
  // proxy.web(req, res, { target: 'http://127.0.0.1:9000' });
  /* WEBSOCKET CODE EXECUTION HERE */

}).listen(10001);

console.log("listening on port 10001");

function init(config) {
  socket = new ws(config.websocket.url);
  console.log(config);
  console.log(config.websocket.url);
  console.log(config.endpoint.id);

  socket.onopen = () => {
    socket.send(config.endpoint.id + '-' + 'Message From Client');
    socket.send(config.endpoint.id + '-' + 'get-web');
    console.log(config.endpoint.id + ' > message sent');
  }
   
  socket.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
    console.log(error);
  }
   
  socket.onmessage = (e) => {
    console.log(e.data);
  }

}

/* HANDLERS */
function handler() {
  
}




