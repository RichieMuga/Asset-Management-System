let listContent= document.querySelectorAll('.faq-text')
let buttonContent = document.querySelectorAll('.toggle-more-btn')
const listArray=Array.from(listContent)
const buttonArray=Array.from(buttonContent)

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

//loop through all buttons in the list and if both the index of the button and list match
// for (let i = 0; i < buttonArray.length; i++) {
//     if (buttonArray[i]&&listArray[i]) {
//      buttonArray[i].addEventListener('click',e=>{
//      listArray[i].classList.toggle('poopoo')
//        })}   
// }


// create funcion that works with individual array indexes
//experimental

const buttonPress=(button,list)=>{
    for (let i = 0; i < button.length; i++) {
        if (button[i]&&list[i]) {
            button[i].addEventListener('click',e=>{
                list[i].classList.toggle('show-more')
                button[i].classList.toggle('rotate-btn')
            })
        }
    }
}
buttonPress(buttonArray,listArray)

