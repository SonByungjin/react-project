#!/usr/bin/env node
const http = require('http');
const mockserver = require('mockserver');

const argv = require('yargs').argv;
const portAPI = argv.portAPI || 9002;
const directory = argv.dir || 'mocks';

mockserver.enableCORSForAPI=true
mockserver.enableCORSForAllResponses=true
process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });

class Mock {
    constructor(directory, port, verbose = true) {
        http.createServer(mockserver(directory, verbose)).listen(port, (error) => {
            if (error) {
                console.log(`Mock server unhandled exception`, error);
                return;
            }

            if (verbose) {
                const url = `http://0.0.0.0:${port}`.green
                console.log(`Mockserver serving ${directory} on: ${url}`);
            }
        })
    }
}

new Mock(directory, portAPI, true)
