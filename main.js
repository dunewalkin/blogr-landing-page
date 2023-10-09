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

function toggleDropdown(button) {
   let dropdownContent = button.nextElementSibling;
   let isOpen = dropdownContent.classList.contains("show");
  closeAllDropdowns();
  removeActive();

  if (!isOpen) {
  dropdownContent.classList.toggle("show");
  button.classList.add("active");
  }
}

function closeAllDropdowns() {
  for (let i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

function removeActive() {
  let buttons = document.getElementsByClassName("dropbtn");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.classList.remove("active");
  }
}

window.onclick = function(event) {
   if (window.innerWidth >= 900) {
     if (!event.target.matches('.dropbtn')) {
       closeAllDropdowns();
       removeActive();
     }
   }
 }








