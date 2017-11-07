# tesseract.js-test
Tesseract.js Test Code

### Observations

For tesseract.js@1.0.10

* With the simple code from examples from tesseract.js for detect, behind the firewall. It gives the below error.
```
{ status: 'loading tesseract core' }
{ status: 'loaded tesseract core' }
{ status: 'initializing tesseract', progress: 0 }
pre-main prep time: 94 ms
{ status: 'initializing tesseract', progress: 1 }
{ status: 'downloading osd.traineddata.gz',
  loaded: 116,
  progress: 0.000027136730992415984 }
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: incorrect header check
    at Zlib._handle.onerror (zlib.js:370:17)
```
* Download zip files manually from 

For Detection - 
https://raw.githubusercontent.com/naptha/tessdata/gh-pages/3.02/osd.traineddata.gz

For Recognize English -
https://raw.githubusercontent.com/naptha/tessdata/gh-pages/3.02/eng.traineddata.gz

* Commonly used fonts for documents
  * As per the [link](http://www.writing-skills.com/best-fonts-for-business-documents), - R -> represents the tesseract.js is able to recognize.
    * Times New Roman - R
    * Garamond - R
    * Bookman Old Style
    * Arial - R
    * Helvetica
    * Verdana
    * Georgia
    * Lucida Sans
    * Lucida Bright
    * Century Schoolbook
    * Frutiger or Futura
    * Gill Sans

