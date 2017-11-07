// Importing tesseract.js
var Tesseract = require('tesseract.js'),
image = require('path').resolve(__dirname, 'images', 'Bookman_Old_Style_26.png');

Tesseract
.recognize(image, {'lang': 'eng'})
.progress(message => console.log(message))
.catch(err => console.error(err))
.then(result => console.log(result))
.finally(resultOrError => {
console.log(resultOrError);
process.exit();
});

// Recognitions
// -------------
// Garamond_26.png
// Obs : - is recognized as ,
// 'Garamond with font size 26 , Font to check\nthe recognition.\nYes it is able to recognize.\n\n'

// Bookman_Old_Style_26.png
// Obs: Bookman is recognized as BookInan
// 'BookInan Old Style with font size 26\n— Font to check the recognition.\nYes it is able to recognize.\n\n'
// Confidence : 88