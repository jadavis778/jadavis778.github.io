// Execute these on initial content load
document.addEventListener('DOMContentLoaded', function () {

  // Add 'active' class to the current Gallery button (highlight it) and filter gallery content
  var btnContainer = document.getElementsByClassName("nav-wrapper")[0];
  if (btnContainer) {
    var btns = btnContainer.getElementsByClassName("nav-btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        if (typeof filterSelection === 'function') {
          filterSelection(this.innerHTML.toLowerCase());
        }
      });
    }
  }
});
  



/* ------------ Gallery Filtering ------------ */

// Execute the function and show all columns
filterSelection("all"); 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show-content");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show-content");
  }
}

// Show filtered column elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide column elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}




/* ------------ Gallery Modal ------------ */

function openGalleryModal(imageSrc) {
  const modal = document.getElementById('modal');
  const modalImg = modal.querySelector('.modal-content');
  
  modalImg.src = imageSrc;

  modal.classList.add('show');
  document.querySelector('.modal-overlay').classList.add('show');
}

function closeGalleryModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
  document.querySelector('.modal-overlay').classList.remove('show');
}
