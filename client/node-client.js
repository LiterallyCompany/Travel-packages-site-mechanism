var Gearman = require('abraxas');
var client = Gearman.Client.connect({ servers: ['127.0.0.1:4730'], defaultEncoding:'utf8' });




client.submitJob('toUpper', 'test string', function(error, result) {
    if (error) console.error(error);
    console.log("Upper1:", result);
});


client.submitJob('toUpper', 'test string').then(function (result) {
    console.log("Upper2:", result);
});


