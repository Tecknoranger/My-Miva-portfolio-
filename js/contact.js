// Contact form validation
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

function setError(id, message) {
  document.getElementById(id + 'Error').textContent = message;
  document.getElementById(id).parentElement.classList.toggle('invalid', message !== '');
  return message === '';
}

function validateName(v) { return setError('name', v === '' ? 'Enter your name.' : ''); }
function validateEmail(v) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (v === '') return setError('email', 'Enter your email address.');
  return setError('email', pattern.test(v) ? '' : 'Enter a valid email, like name@example.com.');
}
function validatePhone(v) {
  if (v === '') return setError('phone', 'Enter your phone number.');
  return setError('phone', /^\d+$/.test(v) ? '' : 'Use digits only, with no spaces or symbols.');
}
function validateMessage(v) { return setError('message', v === '' ? 'Enter your message.' : ''); }

form.addEventListener('submit', function (e) {
  e.preventDefault();
  success.textContent = '';
  const results = [
    validateName(form.name.value.trim()),
    validateEmail(form.email.value.trim()),
    validatePhone(form.phone.value.trim()),
    validateMessage(form.message.value.trim())
  ];
  if (results.every(Boolean)) {
    success.textContent = 'Thanks, ' + form.name.value.trim() + '. Your message has been sent.';
    form.reset();
  }
});
