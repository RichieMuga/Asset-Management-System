const email=document.getElementById("button-copy"); 
const emailString=  ['amskenya254@gmail.com']    
    //COPY BUTTON   
    email.addEventListener("click", () => {
      email.classList.toggle('btn-cp')  
    navigator.clipboard.writeText(emailString)
    setTimeout(() => {
        email.classList.toggle('btn-cp')
    }, 3000);
    });  
