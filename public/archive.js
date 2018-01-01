console.log('archive')
let limenu = document.querySelectorAll("ul.menu > li");

limenu.forEach((li)=>{
  li.addEventListener('click',(e)=>{
    console.log(e);

  });

});

// Carousel for the events
 // $(document).ready(function(){
 //      $('.carousel').carousel();
 //    });
$('.carousel.carousel-slider').carousel({fullWidth: true, indicators:true});
