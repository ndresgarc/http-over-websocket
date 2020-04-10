const WebSocket = require('ws');
const url = 'ws://localhost:8080';
const connection = new WebSocket(url);

var id = 2;

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