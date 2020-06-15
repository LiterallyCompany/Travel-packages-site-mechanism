var Gearman = require('abraxas');
var client = Gearman.Client.connect({ servers: ['127.0.0.1:4730'], defaultEncoding:'utf8' });


client.registerWorker("toUpper", function(task) {
    task.end(task.payload.toUpperCase());
});

