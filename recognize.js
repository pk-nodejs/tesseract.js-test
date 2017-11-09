// Importing tesseract.js
var Tesseract = require('tesseract.js'),
imgName = 'Arial_26.png',
image = require('path').resolve(__dirname, 'images', imgName);

Tesseract
.recognize(image, {'lang': 'eng'})
.progress(message => console.log(message))
.catch(err => console.error(err))
.then(result => { 
    console.log('---------- on then ---------');
    //console.log(result.text);
})
.finally(resultOrError => {
console.log('-------------- on Finally --------');
console.log('---- Recognized Text -------');
console.log(resultOrError.text);
console.log('---- Recognition Confidence -------');
console.log(resultOrError.confidence);
//console.log(resultOrError);
process.exit();
});
