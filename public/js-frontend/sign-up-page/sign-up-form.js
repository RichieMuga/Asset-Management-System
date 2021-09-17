      const form= document.getElementsByClassName("sign-up-form")
      const formData=new FormData(form)
      form.addEventListener('submit',async (e)=>{
          e.preventDefault()
        const response = await fetch('/signup/api/v1',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:{formData}
        }
        )
        const result= await response.json()
        return result;
      })