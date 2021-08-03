const listitems= document.querySelector(".slide-row")
const column= document.querySelector(".slide-column")
const slides= Array.from(listitems.children);
const prevbutton= document.querySelector('#arrow1')
const nextbutton= document.querySelector('#arrow2') 
const slidewidth= slides[0].getBoundingClientRect().width

//arrange slides next to each other

// slides[1].style.left= 1*slidewidth+'px'
// slides[2].style.left= 2*slidewidth+'px'
// slides[3].style.left= 3*slidewidth+'px'

// slides.forEach((slide,index) => {
//     slide.style.left = index*slidewidth+'px'
// });

const slidepositioning =(slide,index)=>{
      slide.style.left = index*slidewidth+'px'
}

slides.forEach(slidepositioning)

const moveslide=(listitems,currentslide,targetslide)=>{
      listitems.style.transform='translateX(-'+targetslide.style.left+')' 
      currentslide.classList.remove('current-slide');
      targetslide.classList.add('current-slide')
}


//CLICK RIGHT BUTTON
nextbutton.addEventListener('click',(e)=>{
      const currentslide=listitems.querySelector('.current-slide')
      const nextslide=currentslide.nextElementSibling
      
      //move current slide
      moveslide(listitems,currentslide,nextslide)      
})
//CLICK LEFT BUTTON
prevbutton.addEventListener('click',(e)=>{
      const currentslide=listitems.querySelector('.current-slide')
      const prevslide=currentslide.previousElementSibling
      
      //move current slide
      moveslide(listitems,currentslide,prevslide)  
})