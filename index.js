'use strict';

const server = require('./server');
const router = require('./routes/router.js')
const requestHandlers = require('./lib/requesthandlers.js');

const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload']=requestHandlers.upload;

server.start(router.route, handle);
