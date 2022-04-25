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
}

function validateEmail(input){
    var regExEmail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    return regExEmail.test(input);
}

window.onload = function(){

  var errorMessage = document.getElementsByClassName('error-msg');
  var email = document.getElementById('email');
  var errorMail = errorMessage[0];

  function showMailErrror(e){
    if (validateEmail(email.value) == false){
      errorMail.style.visibility = 'visible';
      email.classList = 'invalid-input';
    }
  }
  email.addEventListener('blur', showMailErrror);

  function hideMailError(e){
    errorMail.style.visibility = 'hidden';
    email.classList -= 'invalid-input';
  }
  email.addEventListener('focus', hideMailError);

  var password = document.getElementById('pwd');
  var errorPw = errorMessage[1];

  function showPwError(e){
    if (validateNumbersAndLetters(password.value) == false){
      errorPw.style.visibility = 'visible';
      password.classList = 'invalid-input';
    }
  }
  password.addEventListener('blur', showPwError);
  
  function hidePwError(e){
    errorPw.style.visibility = 'hidden';
    password.classList -= 'invalid-input';
  }
  password.addEventListener('focus', hidePwError);

  var loginButton = document.getElementById('login');

  function buttonAlerts(e){
    if(validateNumbersAndLetters(password.value)&&validateEmail(email.value) == true){
      alert('Email:' + email.value + ' Password:' + password.value);
    } else {
      alert(errorMail.textContent + ' ' + 'and/or' + ' ' + errorPw.textContent);
    }
  }

  loginButton.addEventListener('click', buttonAlerts);
}