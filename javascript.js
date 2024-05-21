// Login form
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');

formBtn.addEventListener("click",()=>{
    loginForm.classList.add('active');
})

formClose.addEventListener("click",()=>{
    loginForm.classList.remove('active');
})

//for menubar
let menuBar=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menuBar.addEventListener("click",()=>{
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');

})

//dropdown
function toggleDropdown(dropdownId) {
    var dropdownMenu = document.getElementById(dropdownId);
    dropdownMenu.classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }   
      } 
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
  
        // Toggle the active class on the header
        this.classList.toggle('active');
  
        // Toggle the accordion content visibility
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });
  
