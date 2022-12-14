//OFUSCATE
function ofuscateIOC(ioc){
    ioc = ioc.replaceAll(".", "\[.\]")
             .replaceAll(":", "\[:\]")
             .replaceAll("htt", "hxx")
             .replaceAll(/^\s*\n/gm, "")
    return ioc
}

function replaceIOCOfuscate(){
    txtAreaIOC = document.getElementById("txtAreaOfuscate").value;
    document.getElementById("txtAreaCustomIOCOfuscate").value = ofuscateIOC(txtAreaIOC)
}

//CTRL KEY
function pressKeyOfuscate(e) {
    //if ctrl key, return false
    if (e.which == 17) {

        replaceIOCOfuscate()
    }
}
// END OFUSCATA


//IS NO OFUSCATE
function clarifyIOC(ioc){
    ioc = ioc.replaceAll( "\[.\]",".")
             .replaceAll("\[:\]",":" )
             .replaceAll( "hxx", "htt")
             .replaceAll(/^\s*\n/gm, "")
    return ioc
}
function replaceIOCClarify(){
    txtAreaIOC = document.getElementById("txtAreaIOCClarify").value;
    document.getElementById("txtAreaCustomIOCClarify").value = clarifyIOC(txtAreaIOC)
}
function pressKeyClarify(e) {
    //if ctrl key, return false
    if (e.which == 17) {
      replaceIOCClarify()
    }
}

        
function pressKeyResultFilter(e){
    if (e.which == 17) {
      filterHash()
    }else if(e.which == 112){
        document.getElementById("txtResultCountMD5").value = ""
        document.getElementById("txtResultCountSHA256").value = ""
        document.getElementById("txtResultCountCUSTOM").value = ""
        document.getElementById("txtMD5ResultFilterText").value = ""
        document.getElementById("txtTextFilter").value = ""
        document.getElementById("txtSHA256ResultFilterText").value = ""
        document.getElementById("txtResultFilterText").value = ""
    }

}
function filterHash(){
    const md5 = "md5"
    const sha256 = "sha256"
    const word = document.getElementById("txtWordFilter").value

    const textResult = document.getElementById("txtTextFilter").value

    //filter custom
    const textResultsArray = textResult.split("\n").filter(
        e => e.toLowerCase().includes(word.toLowerCase())
    ).map(e => e.trim());

    resultFilterText = textResultsArray.join("\n")
    document.getElementById("txtResultFilterText").value = resultFilterText

    //filter md5
    const resultsMD5Array = textResult.split("\n").filter(
        e => e.toLowerCase().includes( md5.toLowerCase())
    ).map(e => e.trim());

    resultMD5FilterText = resultsMD5Array.join("\n")
    document.getElementById("txtMD5ResultFilterText").value = resultMD5FilterText
    //filter sha256
    const resultsSHA256Array = textResult.split("\n").filter(
        e => e.toLowerCase().includes( sha256.toLowerCase())
    ).map(e => e.trim());


    resultSHA256FilterText = resultsSHA256Array.join("\n")
    document.getElementById("txtSHA256ResultFilterText").value = resultSHA256FilterText


    //count line md5
    const lineMD5 = resultMD5FilterText.split(/\r\n|\r|\n/);
    console.log("md5"+lineMD5.length)
    document.getElementById("txtResultCountMD5").value = lineMD5.length

    //count line sha256
    const lineSHA256 = resultSHA256FilterText.split(/\r\n|\r|\n/);
    const countLineSHA256 = lineSHA256.length
    console.log(countLineSHA256)
    document.getElementById("txtResultCountSHA256").value = countLineSHA256
    
    //count line custom
    const lineCUSTOM = resultFilterText.split(/\r\n|\r|\n/);
    const countLineCUSTOM = lineCUSTOM.length
    document.getElementById("txtResultCountCUSTOM").value = countLineCUSTOM
}
//line number

var codeEditor = document.getElementsByName('codeEditor');
var lineCounter = document.getElementsByName('lineCounter');

console.log(codeEditor.value)

codeEditor.addEventListener('scroll', () => {
    lineCounter.scrollTop = codeEditor.scrollTop;
    lineCounter.scrollLeft = codeEditor.scrollLeft;
});
codeEditor.addEventListener('keydown', (e) => {
    let { keyCode } = e;
    let { value, selectionStart, selectionEnd } = codeEditor;if (keyCode === 9) {  // TAB = 9
      e.preventDefault();
      codeEditor.value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
      codeEditor.setSelectionRange(selectionStart+2, selectionStart+2)
    }
});
var lineCountCache = 0;
function line_counter() {
      var lineCount = codeEditor.value.split('\n').length;
      var outarr = new Array();
      if (lineCountCache != lineCount) {
         for (var x = 0; x < lineCount; x++) {
            outarr[x] = (x + 1) + '.';
         }
         lineCounter.value = outarr.join('\n');
      }
      lineCountCache = lineCount;
}codeEditor.addEventListener('input', () => {
    line_counter();
});

function pressKeyUpperCase(e){
    if (e.which == 17) {
      textUpperCase()
    }

}
function textUpperCase (){
    const text = document.getElementById("textConvertUpperCase").value
    document.getElementById("textUpperCase").value = text.toUpperCase()

}


//var myTextAsArrayOfLines = text.split("\n");



//END IS NO OFUSCATE

/*




function deleteMD5(hash){
  hash = hash.replaceAll(/^\s*\n/gm, "")
  return hash
}
function delteTextMD5(){
    txtAreaHASH = document.getElementById("txtAreaMD5").value;
    console.log(txtAreaHASH)
    document.getElementById("txtAreaCustomMD5").value = "sdkaf"
}

function pressKeyMD5(e) {
    
    //if ctrl key, return false
    if (e.which == 17) {
        document.getElementById("txtAreaCustomMD5").value = "sdkaf"
        //delteTextMD5()
    }

}
/////////////////////////////////////
var codeEditor = document.getElementById('codeEditor');
var lineCounter = document.getElementById('lineCounter');
codeEditor.addEventListener('scroll', () => {
  lineCounter.scrollTop = codeEditor.scrollTop;
  lineCounter.scrollLeft = codeEditor.scrollLeft;
});
codeEditor.addEventListener('keydown', (e) => {
  let { keyCode } = e;
  let { value, selectionStart, selectionEnd } = codeEditor;if (keyCode === 9) {  // TAB = 9
    e.preventDefault();
    codeEditor.value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
    codeEditor.setSelectionRange(selectionStart+2, selectionStart+2)
  }
});
var lineCountCache = 0;
function line_counter() {
      var lineCount = codeEditor.value.split('\n').length;
      var outarr = new Array();
      if (lineCountCache != lineCount) {
         for (var x = 0; x < lineCount; x++) {
            outarr[x] = (x + 1) + ' ';
         }
         lineCounter.value = outarr.join('\n');
      }
      lineCountCache = lineCount;
}codeEditor.addEventListener('input', () => {
    line_counter();
});
*/