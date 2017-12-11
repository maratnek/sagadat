console.log('hellow')
let limenu = document.querySelectorAll("ul.menu > li");

limenu.forEach((li)=>{
  li.addEventListener('click',(e)=>{
    console.log(e);

  });

});
