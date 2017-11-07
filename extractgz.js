var zlib = require('zlib');
var fs = require('fs');
var path =  require('path');
// Thanks to the link 
// https://stackoverflow.com/a/15529827
//var gzfile = path.join(__dirname, 'osd.traineddata.gz');
//var destnation_file = path.join(__dirname, 'osd.traineddata');
var gzfile = path.join(__dirname, 'eng.traineddata.gz');
var destnation_file = path.join(__dirname, 'eng.traineddata');
var inStream = fs.createReadStream(gzfile);
var outStream = fs.createWriteStream(destnation_file);
inStream.pipe(zlib.createGunzip()).pipe(outStream);