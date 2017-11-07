// Importing tesseract.js
var Tesseract = require('tesseract.js'),
imgName = 'Arial_26.png',
image = require('path').resolve(__dirname, 'images', imgName);

Tesseract
.recognize(image, {'lang': 'eng'})
.progress(message => console.log(message))
.catch(err => console.error(err))
.then(result => console.log(result))
.finally(resultOrError => {
console.log(resultOrError);
process.exit();
});
