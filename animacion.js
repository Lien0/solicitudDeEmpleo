window.onload = function () {
  document.getElementById("name").addEventListener("focus", changeFocus);
  document.getElementById("name").addEventListener("blur", changeBlur);

  document.getElementById("lastName").addEventListener("focus", changeFocus);
  document.getElementById("lastName").addEventListener("blur", changeBlur);

  document.getElementById("mail").addEventListener("focus", changeFocus);
  document.getElementById("mail").addEventListener("blur", changeBlur);

  document.getElementById("number").addEventListener("focus", changeFocus);
  document.getElementById("number").addEventListener("blur", changeBlur);

  document.getElementById("description").addEventListener("focus", changeFocus);
  document.getElementById("description").addEventListener("blur", changeBlur);

};

function changeFocus(event) {
  event.target.style.background = "#b5e48c";
  event.target.style.outline = "none";
}

function changeBlur(event){
  event.target.style.background = "white";

}

function changeFocusButton(el){
  el.style.background = '#b5e48c';
}
function changeBlurButton(el){
  el.style.background = 'white';
}
