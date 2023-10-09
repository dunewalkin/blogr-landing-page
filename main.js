const dropdowns = document.getElementsByClassName("dropdown-content");
const primaryNav = document.querySelector (".primary-navigation");
const navToggle = document.querySelector (".mobile-nav-toggle");

navToggle.addEventListener('click', ()  => {
   const visibility = primaryNav.getAttribute("data-visible");
   
   if (visibility === "false") {
      primaryNav.setAttribute ("data-visible", true);
      navToggle.setAttribute ("aria-expanded", true);
   } else if (visibility === "true") {
      primaryNav.setAttribute ("data-visible", false);
      navToggle.setAttribute ("aria-expanded", false);
   }
}); 

// function toggleDropdown(button) {
//    var dropdownContent = button.nextElementSibling; // Get the next sibling, which is the dropdown content
 
//    // Close all open dropdowns
//    var allDropdowns = document.querySelectorAll(".dropdown-content");
//    allDropdowns.forEach(function(dropdown) {
//      if (dropdown !== dropdownContent && dropdown.style.display === "block") {
//        dropdown.style.display = "none";
//        // Remove the "active" class from the corresponding button
//        var correspondingButton = dropdown.previousElementSibling;
//        correspondingButton.classList.remove("active");
//      }
//    });
 
//    // Toggle the "active" class on the button
//    button.classList.toggle("active");
 
//    // Toggle the display of the dropdown content
//    if (dropdownContent.style.display === "block") {
//      dropdownContent.style.display = "none";
//    } else {
//      dropdownContent.style.display = "block";
//    }
//  }
 
 
 

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleDropdown(button) {
   let dropdownContent = button.nextElementSibling;
   let isOpen = dropdownContent.classList.contains("show");
  // Close all open dropdowns and remove the "active" class from all buttons
  closeAllDropdowns();
  removeActive();

  if (!isOpen) {
  dropdownContent.classList.toggle("show");
  button.classList.add("active");
  }
}

// Close all open dropdowns
function closeAllDropdowns() {
  for (let i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

// Remove the "active" class from all buttons
function removeActive() {
  let buttons = document.getElementsByClassName("dropbtn");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.classList.remove("active");
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
   // Check if the screen width is greater than or equal to 56.25em (900px)
   if (window.innerWidth >= 900) {
     if (!event.target.matches('.dropbtn')) {
       closeAllDropdowns();
       removeActive();
     }
   }
 }








