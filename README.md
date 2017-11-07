# tesseract.js-test
Tesseract.js Test Code

### Getting Started

* Install dependencies, run `npm install`
* Download the corresponding language .gz file from the links below, and move to tesseract.js-test/ folder
* Run `node extractgz.js` to extract the .traineddata file. Ex: For eng.traineddata.gz, it will extract to eng.traineddata in the same tesseract.js-test/ folder
* Open Microsoft Word(For Windows, doc refers to Word 2016), Select the Font type and Font size(min 26), Write the text want to recognize. Select all and copy to clipboard. Open new Word Window and choose Paste -> Paste Special -> Picture (Enhanced Metafile). Then you can right click and save as picture as .png file.
* Change the name of file to recognize in recognize.js and run `node recognize.js`, returns the text recognized and its confidence.

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
    * Bookman Old Style - R
    * Arial - R
    * Helvetica - Unable to find font in Microsoft Word.
    * Verdana - R
    * Georgia - R
    * Lucida Sans - R
    * Lucida Bright - R
    * Century Schoolbook - R
    * Frutiger or Futura - Unable to find font in Microsoft Word.
    * Gill Sans - R

### Recognitions

| Font Name   |      File      |  Recognition | Confidence | Observations |
|----------|-------------|------|:-----:|-------|
| Times New Roman |  [Times_New_Roman_26.png](images/Times_New_Roman_26.png) | 'Times New Roman with font size 26 - Font\nto check the recognition.\nYes it is able to recognize.\n\n' | 88 | None |
| Garamond | [Garamond_26.png](images/Garamond_26.png) | 'Garamond with font size 26 , Font to check\nthe recognition.\nYes it is able to recognize.\n\n' | 83 | - is recognized as , | 
| Bookman Old Style | [Bookman_Old_Style_26.png](images/Bookman_Old_Style_26.png) | 'BookInan Old Style with font size 26\n— Font to check the recognition.\nYes it is able to recognize.\n\n' | 88 | Bookman is recognized as BookInan |
| Arial | [Arial_26.png](images/Arial_26.png) | 'Arial with font size 26 - Font to check\nthe recognition.\nYes it is able to recognize.\n\n' | 92 | None |
| Verdana | [Verdana_26.png](images/Verdana_26.png) | 'Verdana with font size 26 - Font to\ncheck the recognition.\nYes it is able to recognize.\n\n' | 95 | None |
| Georgia | [Georgia_26.png](images/Georgia_26.png) | 'Georgia with font size 26 - Font to check\nthe recognition.\nYes it is able to recognize.\n\n' | 90 | None |
| Lucida Sans | [Lucida_Sans_26.png](images/Lucida_Sans_26.png) | 'Lucida Sans with font size 26 — Font\nto check the recognition.\nYes it is able to recognize.\n\n' | 91 | None |
| Lucida Bright | [Lucida_Bright_26.png](images/Lucida_Bright_26.png) | 'Lucida Bright with font size 26 —\nFont to check the recognition.\nYes it is able to recognize.\n\n' | 89 | None |
| Century Schoolbook | [Century_Schoolbook_26.png](images/Century_Schoolbook_26.png) | 'Century Schoolbook with font size 26 -\nFont to check the recognition.\nYes it is able to recognize.\n\n' | 89 | None |
| Gill Sans MT | [Gill_Sans_MT_26.png](images/Gill_Sans_MT_26.png) | 'Gill Sans MT with font size 26 - Font to\ncheck the recognition.\nYes it is able to recognize.\n\n' | 89 | None |
| Hand Written 01 | [hand_wrriten_01.png](images/hand_written_01.png) | 'ﬂag W brawn fax\nJaw M ii; Lew\nhound.\n\n' | 51 | brown recognized as brawn, fox recognized as fax, hound recognized correctly, all others are failed miserably. |