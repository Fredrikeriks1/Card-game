// refer to question 3 before development starts for scope document

var el = document.querySelector("#aboutText");

// Replacing the words in the about text
el.innerHTML = el.innerHTML.replace(/Magic/g, 'Something');

var isOpen = false

// Adding click event on the moreInfoTrigger to display: block the content
var moreInfoTrigger = document.getElementById('moreInfoTrigger');

moreInfoTrigger.addEventListener('click', function(e){
  if (isOpen) {

    document.querySelector("#moreInfoContent").setAttribute("style", "display: none");
    isOpen = false;

    return;
  }

  document.querySelector("#moreInfoContent").setAttribute("style", "display: block");
  isOpen = true;
});
