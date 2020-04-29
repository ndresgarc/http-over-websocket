const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 80 });
 
function getWeb() {

    return "Your web response";

}

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);

    if (message == '2-get-web') {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send('message for 1');
              }
          });
    }

    if (message == '1-get-web') {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send('message for 2');
              }
          });
    }

    if (message.indexOf('get-web') > -1) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send('message for everyone');
              }
          });
    }

  })
  ws.send('Hello! Message From Server!!');
});