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
  var alertMessage;

  function showMailError() {
    if (!validateEmail(email.value)) {
      errorEmail.style.visibility = 'visible';
      email.classList = 'invalid-input';
      emailMessage = 'Email: ' + errorEmail.textContent;
    } else {
      emailMessage = 'Email: ' + email.value;
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
      passwordMessage = '\nPassword: ' + errorPw.textContent;
    } else {
      passwordMessage = '\nPassword: ' + password.value;
    }
  }
  
  function hidePwError() {
    errorPw.style.visibility = 'hidden';
    password.classList -= 'invalid-input';
  }

  function showValidationsContent(event) {
    event.preventDefault();
    alertMessage = emailMessage + passwordMessage;
    submitInfo();
  }

  email.addEventListener('blur', showMailError);
  email.addEventListener('focus', hideMailError);
  password.addEventListener('blur', showPwError);
  password.addEventListener('focus', hidePwError);
  loginButton.addEventListener('click', showValidationsContent);




  function allValidated() {
    return validateEmail(email.value) && validateNumbersAndLetters(password.value) && password.value.length > 7;
  }

  function submitInfo() {
    if (allValidated()) {
      fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' +
      email.value + '&password=' + password.value)
      .then (function (response) {
        return response.json();
      })
      .then (function (data) {
        if(data.success){
          console.log(data);
          var correctAlert = data.msg + '\n' + alertMessage;
          alert(correctAlert);
        } else {
          throw Error;
        }
      })
      .catch (function() {
        alert('user not found');
      });
    } else {
      alert('Request rejected \n'+ alertMessage);
    }
  }
}