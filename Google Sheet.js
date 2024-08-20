const scriptURL = 'https://script.google.com/macros/s/AKfycbz5wIOaIRcpAfyTWT4WsFBtZ2n57OCmVBSDdJU6HQllCraDLYHD8jB66A1eqAg36-F9/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
