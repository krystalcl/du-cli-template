var read = require('read-metadata');

read('./metadata.js', function(err, data){
    console.log(data);
});