var Gearman = require('abraxas');
Gearman.Server.listen({port: 4730});
console.log('Job server started')