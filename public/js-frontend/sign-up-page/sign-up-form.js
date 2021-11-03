const form = document.getElementById('form-sign-up')
let formData = new FormData(form)
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  console.log(formData)
  const response = await fetch('/api/v1/auth', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    body: { formData }
  })
    .catch(error => {
      console.log(error);
    })
  const result = await response.json()
  console.log(result)
  return result;
})