var emailMessage = '';
var passwordMessage = '';

function validateNumbersAndLetters(string) {
  var hasNumber = false;
  var hasLetter = false;
  for (var i = 0; i < string.length; i++) {
    var element = string[i];
    if (isNaN(element)) {
      hasLetter = true;
    }
    if (!isNaN(element)) {
      hasNumber = true;
    }
  }
  return hasLetter && hasNumber;
};

function validateEmail(input) {
    var regExEmail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    return regExEmail.test(input);
};

window.onload = function() {
  var email = document.getElementById('email');
  var errorEmail = document.getElementById('email-error');
  var password = document.getElementById('pwd');
  var errorPw = document.getElementById('password-error');
  var loginButton = document.getElementById('login');

  function showMailError() {
    if (!validateEmail(email.value)) {
      errorEmail.style.visibility = 'visible';
      email.classList = 'invalid-input';
      emailMessage = errorEmail.textContent;
    } else {
      emailMessage = email.value;
    }
  }

  function hideMailError() {
    errorEmail.style.visibility = 'hidden';
    email.classList -= 'invalid-input';
  }

  function showPwError() {
    if (!validateNumbersAndLetters(password.value)) {
      errorPw.style.visibility = 'visible';
      password.classList = 'invalid-input';
      passwordMessage = errorPw.textContent;
    } else {
      passwordMessage = password.value;
    }
  }
  
  function hidePwError() {
    errorPw.style.visibility = 'hidden';
    password.classList -= 'invalid-input';
  }

  function showValidationsContent() {
    var alertMessage = 'Email: ' + emailMessage + '\nPassword: ' + passwordMessage;
    alert(alertMessage);
  }

  email.addEventListener('blur', showMailError);
  email.addEventListener('focus', hideMailError);
  password.addEventListener('blur', showPwError);
  password.addEventListener('focus', hidePwError);
  loginButton.addEventListener('click', showValidationsContent);
};