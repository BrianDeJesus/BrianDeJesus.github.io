(function () {

function getElem(idSelector) {
  return document.getElementById(idSelector);
}

var slideNav = getElem('slide-nav');
var header = getElem('main-header');
//open or close nav slider
function displaySideNav() {
  slideNav.style.width = '300px';
  header.style.opacity = "1";
}

function closeSideNav() {
  slideNav.style.width = '0';
  header.style.opacity = ".5";
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
