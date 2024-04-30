const textInput = document.getElementById('textInput');
const counter = document.getElementById('counter');

textInput.addEventListener('input', updateCounter);

function updateCounter() {
  const textLength = textInput.value.length;
  const maxLength = textInput.getAttribute('maxlength');
  counter.textContent = `${textLength}/${maxLength}`;

  // Change counter text color based on character count
  if (textLength >= maxLength * 0.8) {
    counter.classList.add('text-danger');
  } else {
    counter.classList.remove('text-danger');
  }
}