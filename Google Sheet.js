const scriptURL = 'https://script.google.com/macros/s/AKfycbwX0dwhtgcpSQzTV0QQW9Ixy5UfJ8pHckjUPKRIMRGVKSLpQNisG5agzmNlbPm6_bu2Qg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
