(function () {


function getElem(idSelector) {
  return document.getElementById(idSelector);
}

//open or close nav slider
function displaySideNav() {
  getElem('slide-nav').style.width = '300px';
}

function closeSideNav() {
  getElem('slide-nav').style.width = '0';
}

getElem('hamburger').addEventListener('click', displaySideNav, false);

//triggers list for closing slide nav
var closeTriggers = document.querySelectorAll('#close-btn, #contact-slide, #proj-slide');

for(var i = 0; i < closeTriggers.length; i++){
  closeTriggers[i].addEventListener('click', closeSideNav, false);
}

/*closeTriggers.forEach(function(triggerButton) {
  triggerButton.addEventListener('click', closeSideNav, false);
});*/



})();
