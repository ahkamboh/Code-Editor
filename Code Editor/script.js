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
     indentUnit: 4
});
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
        indentUnit: 4
});
 run=()=> {
    var htmlCode = htmleditor.getValue();
    let cssCode = "<style>" + csseditor.getValue() + "</style>";
    let scriptCode = jseditor.getValue();
    let output = document.querySelector("iframe");
    let result = document.querySelector(".result");
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(scriptCode);
    // For Small screen 
    result.classList.toggle('Show');
    document.querySelector('body').classList.toggle('overflow')
}
// Scroll toggle 
let header=document.querySelector('header');
window.addEventListener("scroll", function () {
    header.classList.toggle("header-border", window.scrollY > 0);
  });