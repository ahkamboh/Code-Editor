// Portfolio link
// https://alihamzakamboh.com
// Github
// https://github.com/ahkamboh/ 2023 project-21
// Repositorie link
// https://github.com/ahkamboh/Code-Editor/
// ------------------------------------------
// Making object by using code Mirror library
// 1 :Html
const htmleditor = CodeMirror.fromTextArea(document.getElementById("html"), {
  value: document.getElementById("html").innerText,
  mode: "xml",
  tabSize: 5,
  lineNumbers: true,
  theme: "yonce",
  autoCloseTags: true,
  autoCloseBrackets: true,
  styleActiveLine: true,
  indentWithTabs: true,
  tabSize: 4,
  indentUnit: 4,
});
// 2:Css
const csseditor = CodeMirror.fromTextArea(document.getElementById("css"), {
  value: document.getElementById("css").innerText,
  mode: "css",
  tabSize: 5,
  lineNumbers: true,
  theme: "yonce",
  autoCloseTags: true,
  autoCloseBrackets: true,
  styleActiveLine: true,
  indentWithTabs: true,
  tabSize: 4,
  indentUnit: 4,
});
// 3 :js
const jseditor = CodeMirror.fromTextArea(document.getElementById("js"), {
  value: document.getElementById("js").innerText,
  mode: "javascript",
  tabSize: 5,
  lineNumbers: true,
  theme: "yonce",
  autoCloseTags: true,
  autoCloseBrackets: true,
  styleActiveLine: true,
  indentWithTabs: true,
  tabSize: 4,
  indentUnit: 4,
});
// Function for running code of html css and js 
// getValue() comes from code Mirror that works just like " VALUE" in js work
run = () => {
  var htmlCode = htmleditor.getValue();
  let cssCode = "<style>" + csseditor.getValue() + "</style>";
  let scriptCode = jseditor.getValue();
  let output = document.querySelector("iframe");
  let result = document.querySelector(".result");
 // (contentDocument.body.innerHTML ) that expression  works just like that boilerplate of HTML work
  output.contentDocument.body.innerHTML = htmlCode + cssCode;
  // The eval() method evaluates or executes an argument.
  output.contentWindow.eval(scriptCode);
  // For Mobile phones to display output
  result.classList.toggle("Show");
  // prevent scroll on mobile while output screen show
  document.querySelector("html").classList.toggle("overflow");
};
// Scroll toggle
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("header-border", window.scrollY > 0);
});

// copy code function 
function copyContent(id) {
  let copyText = "";
  
  switch(id) {
    case 'html':
      copyText = htmleditor.getValue();
      break;
    case 'css':
      copyText = csseditor.getValue();
      break;
    case 'js':
      copyText = jseditor.getValue();
      break;
    default:
      console.error("Invalid id");
      return;
  }

  navigator.clipboard.writeText(copyText)
    .then(() => {
      let copyinner = document.querySelector(".cpy" + id);
      copyinner.innerText = "Copied";
    })
    .catch(err => {
      console.error('Error copying text: ', err);
    });
}

// code  download function 
  function downloadFile(fileId) {
  var fileContent = "";
  var fileExtension = "";
  switch(fileId) {
    case 'html':
      fileContent = htmleditor.getValue();
      fileExtension = '.html';
      break;
    case 'css':
      fileContent = csseditor.getValue();
      fileExtension = '.css';
      break;
    case 'js':
      fileContent = jseditor.getValue();
      fileExtension = '.js';
      break;
    default:
      console.error("Invalid fileId");
      return;
  }

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContent));
  element.setAttribute('download', 'file' + fileExtension);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
// pop up note 
let myPopup = document.querySelector(".popbg");
setTimeout(poPup, 20000);
function poPup() {
  myPopup.style.display = "none";
}
// ----------------------------------------------
// Portfolio link
// https://alihamzakamboh.com
// Code-Editor Repo
// https://github.com/ahkamboh/Code-Editor/
// Github
// https://github.com/ahkamboh
