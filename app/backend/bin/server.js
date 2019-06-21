'use strict'

// **** imports ****
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('eventsnode:server');

// **** set number port ****
const port = process.env.PORT || '3001';
app.set('port', port);

// **** application @ http ****
const server = http.createServer(app);

// **** listen on a port ****
server.listen(port, () => console.log(`Server started on port ${port}`));

// **** set events ****
server.on('error', onError);
server.on('listening', onListening);

// **** custom message ****
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// **** debug ****
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe '+ addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}