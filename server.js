
const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 80 });
 
function getWeb() {
    return "Your web response";
}
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
    
        wss.clients.forEach(function each(client) {
          
                client.send(message);
              
          });
  })
  ws.send('Hello! Message From Server!!');
});
