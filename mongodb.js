var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var url = 'mongodb://aiqrate-telemetry:DlU6lydNE26WSdf0wlMLzeAdqnADYMgVjWKnXz4SYlN5zZhYoLggFl6qh3Bbk6HgNptHuP4CjYSynYl2Dhqr4Q==@aiqrate-telemetry.mongo.cosmos.azure.com:10255/?ssl=true&appName=@aiqrate-telemetry@';
var dbName = 'admin';
var collectionName = 'telemetry';

async function main() {
    client = await MongoClient.connect(url);
    db = client.db(dbName);

    telemetryMsg = require('./telemetry-data.js');
    for (i = 0; i < 100; i++) {
        // generate random with 9 digits
        telemetryMsg.serialNumber = Math.ceil(Math.random() * 1000000000);

        // generate OK/NOK randomly => random number in range 0 & 1
        var minimum = 0;
        var maximum = 1;
        var overallDecision = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        telemetryMsg.overallDecision = overallDecision == 0 ? "OK" : "NOK";

        // get the timestamp
        telemetryMsg.timeOfScan = Date.now();

        telemetryMsg._id = new ObjectID;
        ret = await db.collection(collectionName).insertOne(telemetryMsg);
        console.log('pushed: ' + i);
        console.log('return: ' + ret);
    }
    process.exit();
}

main();
