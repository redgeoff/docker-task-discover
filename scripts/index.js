#!/usr/bin/env node

// TODO: use minist to get params from CL

'use strict';

var Server = require('./server');

var server = new Server(3000);

server.start();