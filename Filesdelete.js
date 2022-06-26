var fs = require('fs');
 
// delete file named 'sample.txt'
fs.unlink('sample.txt', function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log('File deleted!');
});