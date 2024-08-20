const scriptURL = 'https://script.google.com/macros/s/AKfycbzTfcxMnqTJZ8Ztc9WYjB_GxRu9spTGM0ACGpk_OKyw8p7dvUnY0BIjF71yQIoOK3p8/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
