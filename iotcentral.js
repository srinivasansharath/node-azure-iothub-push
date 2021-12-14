'use strict';

var uuid = require('uuid');
var Protocol = require('azure-iot-device-amqp').AmqpWs;
var Client = require('azure-iot-device').Client;
var Message = require('azure-iot-device').Message;

var connectionString = '';

var client = Client.fromConnectionString(connectionString, Protocol);

client.open(function (err) {
    if (err) {
        console.error('Could not connect: ' + err.message);
    } else {
        console.log('Client connected');

        // client.on('error', function (err) {
        //     console.error(err.message);
        //     process.exit(-1);
        // });

        var message = new Message(JSON.stringify(require('./telemetry-data.js')));
        message.properties.add('dummyProperty', 'dummyValue');
        message.messageId = uuid.v4();

        console.log('Sending message: ' + message.getData());
        client.sendEvent(message, function (err) {
            if (err) {
                console.error('Could not send: ' + err.toString());
                process.exit(-1);
            } else {
                console.log('Message sent: ' + message.messageId);
                process.exit(0);
            }
        });
    }
});
