// const { response } = require("express")

const form = document.getElementById('form-sign-up')
const submitbtn = document.getElementsByClassName('sign-up-submit')

//failed attempt

// async function handlesubmit(e) {
//   //prevent page refresh
//   e.preventDefault()
//   const myform = e.target
//   const formData = new FormData(myform)

//   const json = await convertFD2Json(formData)

//   fetch('/api/v1/auth', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: json
//   })
//     .catch((error) =>
//       console.log(error))
// }

// async function convertFD2Json(fd) {
//   myObj = {}
//   for (let keys of fd.keys()) {
//     myObj[keys] = fd.get(keys)
//   }
//   return myObj
// }
// form.addEventListener('submit', handlesubmit)
// setTimeout(() => {
//   style
// }, timeout);
// fetch(req).then((res) => {
//   console.log(res);
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

//surebet

if (form) {
  form.addEventListener('submit', (e) => {
    submitform(e, this)
  })
}

const submitform = async (e, form) => {
  //prevent pagee reload
  e.preventDefault();
  //submit form
  //user interaction
  submitbtn.disabled = true;
  setTimeout(() => submitbtn.disabled = false, 2000);
  //build json body
  const jsonFormData = buildJsonFormData(form)
  //build headers
  const headers = buildHeaders();
  //req and res
  const res = await fetchService.performPostHttpRequest('/api/v1/auth', headers, jsonFormData)//uses json placeholder
  console.log(res)
  //inform user of result
  if (res) {
    window.location = ('http://localhost:5000/login')
  }
  else {
    alert('an error has occured')
  }
}

const buildJsonFormData = (form) => {
  const myobj = {}
  for (const pair of newFormData(form)) {
    jsonFormData[pair[0]] = pair[1]
  }

  return myobj;

}

const performPostHttpRequest = (fetchlink, headers, body) => {
  if (!fetchlink | !headers | !body) {
    throw new Error('One or more post parameters was paused')
  }
  try {
    const rawResponse = await fetch(fetchlink, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
    const content = await rawResponse.json()
    return content;
  } catch (error) {
    console.error(`error at fetch POST ${error}`)
    throw error
  }
}