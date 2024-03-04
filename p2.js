// variables

// const accordion = document.getElementsByClassName('content-container');

//     for ( i = 0; i < accordion.length; i++) {

//         accordion[i].addEventListener('click',function() {

//         this.classList.toggle('active');

//         })
//     };



document.addEventListener("DOMContentLoaded", function() {
    var accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function(item) {
      var header = item.querySelector('.accordion-header');
      var content = item.querySelector('.accordion-content');
  
      header.addEventListener('click', function() {
        content.classList.toggle('active');
  
        if (content.classList.contains('active')) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
  