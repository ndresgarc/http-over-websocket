
'use strict';

/* REQUIRE */
const ws = require('ws');
const fs = require('fs');
const http = require('http');
const httpProxy = require('http-proxy');

/* GLOBAL */
let config = {};
let server = new ws.Server({ port: 80 });

/* CONFIG */
fs.readFile('config.json', (error, data) => {
    if (error) throw error;
    config = JSON.parse(data);
    init(config);
});

/* INIT */
function init(config) {
    server.on('connection', socket => {
        socket.on('message', message => {
            console.log(`Received message => ${message}`);
            wss.clients.forEach(function each(client) {
                client.send(message);
            });
        })
        socket.send(config.server.id + ' : echo' );
    });
}
 