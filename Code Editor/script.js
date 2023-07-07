// https://github.com/ahkamboh/    in @ahkamboh 2023
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
  indentUnit: 4,
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
  indentUnit: 4,
});
run = () => {
  var htmlCode = htmleditor.getValue();
  let cssCode = "<style>" + csseditor.getValue() + "</style>";
  let scriptCode = jseditor.getValue();
  let output = document.querySelector("iframe");
  let result = document.querySelector(".result");
  output.contentDocument.body.innerHTML = htmlCode + cssCode;
  output.contentWindow.eval(scriptCode);
  // For Small screen
  result.classList.toggle("Show");
  document.querySelector("body").classList.toggle("overflow");
};
// Scroll toggle
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("header-border", window.scrollY > 0);
});

copyhtml = () => {
  // Get the text field
  let copyText = document.getElementById("html");
  let copyinner = document.querySelector(".cpyhtml");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  copyinner.innerText = "Copied";
};

// file save formation
let textarea = document.getElementById("html");
let btnhtml = document.querySelector(".btnhtml");
//on button click
btnhtml.addEventListener("click", () => {
  //creating new blob with textarea value and selected file format
  let blob = new Blob([textarea.value], { type: "text/html" });

  //creating temporary url for the blob
  let fileUrl = URL.createObjectURL(blob);
  //creating new a tag
  let link = document.createElement("a");
  //passing file name input value as download value for the link
  link.download = "index";

  //passing temporary url to link
  link.href = fileUrl;

  //on link click, file will be downloaded
  link.click();
});

copycss = () => {
  // Get the text field
  let copyText = document.getElementById("css");
  let copyinner = document.querySelector(".cpycss");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  copyinner.innerText = "Copied";
};

// file save formation
let textareaCss = document.getElementById("css");
let btncss = document.querySelector(".btncss");
//on button click
btncss.addEventListener("click", () => {
  //creating new blob with textarea value and selected file format
  let blob = new Blob([textarea.value], { type: "text/css" });

  //creating temporary url for the blob
  let fileUrl = URL.createObjectURL(blob);
  //creating new a tag
  let link = document.createElement("a");
  //passing file name input value as download value for the link
  link.download = "style";

  //passing temporary url to link
  link.href = fileUrl;

  //on link click, file will be downloaded
  link.click();
});

copyjs = () => {
  // Get the text field
  let copyText = document.getElementById("js");
  let copyinner = document.querySelector(".cpyjs");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  copyinner.innerText = "Copied";
};

// file save formation
let textareajs = document.getElementById("js");
let btnjs = document.querySelector(".btnjs");
//on button click
btnjs.addEventListener("click", () => {
  //creating new blob with textarea value and selected file format
  let blob = new Blob([textareajs.value], { type: "text/js" });

  //creating temporary url for the blob
  let fileUrl = URL.createObjectURL(blob);
  //creating new a tag
  let link = document.createElement("a");
  //passing file name input value as download value for the link
  link.download = "script";

  //passing temporary url to link
  link.href = fileUrl;

  //on link click, file will be downloaded
  link.click();
});
// pop up note 
let myPopup = document.querySelector(".popbg");
setTimeout(poPup, 20000);
function poPup() {
  myPopup.style.display = "none";
}

// https://github.com/ahkamboh/Code-Editor/
// https://github.com/ahkamboh
