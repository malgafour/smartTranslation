 
 window.addEventListener('load',   fn , false )

 //  window.onload = function loader() {
 function fn() {
     // Preloader
     if(document.getElementById('preloader')){
         setTimeout(() => {
             document.getElementById('preloader').style.visibility = 'hidden';
             document.getElementById('preloader').style.opacity = '0';
         }, 350);
     }
 }
  


   // Toggle menu
 function toggleMenu() {
   document.getElementById('isToggle').classList.toggle('open');
   var isOpen = document.getElementById('navbar')
   if (isOpen.style.display === "block") {
       isOpen.style.display = "none";
   } else {
       isOpen.style.display = "block";
   }
 };
 
 // back-to-top
 var mybutton = document.getElementById("back-to-top");
 window.onscroll = function () {
     scrollFunction();
 };
 
 function scrollFunction() {
     if(mybutton!=null){
         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
             mybutton.style.display = "block";
         } else {
             mybutton.style.display = "none";
         }
     }
 }
 
 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }
 
 //Tooltip
 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
 });
   