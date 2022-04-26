function validateNumbersAndLetters(string){
  var hasNumber = false;
  var hasLetter = false;
  for (var i = 0; i < string.length; i++) {
    const element = string[i];
    if (isNaN(element)){
      hasLetter = true;
    }
    if(!isNaN(element)){
      hasNumber = true;
    }
  }
  return hasLetter && hasNumber;
};

function validateEmail(input){
    var regExEmail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    return regExEmail.test(input);
};

var emailMessage = '';
var passwordMessage = '';


window.onload = function(){

  var errorMessage = document.getElementsByClassName('error-msg');
  var email = document.getElementById('email');
  var errorEmail = errorMessage[0];

  function showMailError(e){
    if (validateEmail(email.value) == false){
      errorEmail.style.visibility = 'visible';
      email.classList = 'invalid-input';
      emailMessage = errorEmail.textContent;
    }else{
      emailMessage = email.value;
    }
  }
  email.addEventListener('blur', showMailError);

  function hideMailError(e){
    errorEmail.style.visibility = 'hidden';
    email.classList -= 'invalid-input';
  }
  email.addEventListener('focus', hideMailError);

  var password = document.getElementById('pwd');
  var errorPw = errorMessage[1];

  function showPwError(e){
    if (validateNumbersAndLetters(password.value) == false){
      errorPw.style.visibility = 'visible';
      password.classList = 'invalid-input';
      passwordMessage = errorPw.textContent;
    }else{
      passwordMessage = password.value;
    }
  }
  password.addEventListener('blur', showPwError);
  
  function hidePwError(e){
    errorPw.style.visibility = 'hidden';
    password.classList -= 'invalid-input';
  }
  password.addEventListener('focus', hidePwError);

  var loginButton = document.getElementById('login');

  loginButton.addEventListener('click', showValidationsContent);

  function showValidationsContent(e){
    var alertMessage = 'Email: ' + emailMessage + '\nPassword: ' + passwordMessage;
    alert(alertMessage);
  }

};