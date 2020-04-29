
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
  // socket = new ws(config.url);
  console.log(config);
  console.log(config.websocket.url);
  console.log(config.endpoint.id);

  connection.onopen = () => {
    connection.send(id + '-' + 'Message From Client');
    connection.send(id + '-' + 'get-web');
  }
   
  connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
  }
   
  connection.onmessage = (e) => {
    console.log(e.data);
  }

}

/* HANDLERS */
function () {
  
}

