let list= document.querySelectorAll('.faq-text')
let button = document.querySelectorAll('.toggle-more-btn')
const listArray=Array.from(list)
const buttonArray=Array.from(button)

//display both array list

// console.log(listArray)
// console.log(buttonArray)

//check if individual examples buttons are coherent with each other

// if (buttonArray[0] && listArray[0]) {
//     buttonArray[0].addEventListener('click',(e)=>{
//         listArray[0].classList.toggle('poopoo')
//     })
// }
// if (buttonArray[1] && listArray[1]) {
//     buttonArray[1].addEventListener('click',(e)=>{
//         listArray[1].classList.toggle('poopoo')
//     })
// }

//use methods in place of examples

// create funcion that works with individual array indexes
//experimental

const fufu=(list,button)=>{
     if (buttonArray.indexOf(button) && listArray.indexOf(list)) {
    buttonArray[button].addEventListener('click',(e)=>{
        listArray[list].classList.toggle('poopoo')
    })
}
}
fufu(1,1);