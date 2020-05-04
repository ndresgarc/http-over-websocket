
'use strict';

/* REQUIRE */
const ws = require('ws');
const fs = require('fs');

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

