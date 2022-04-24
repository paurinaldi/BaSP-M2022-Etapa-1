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

  var email = document.getElementById('email');
  var errorMessage = document.getElementsByClassName('error-msg');
  var errorMail = errorMessage[0];
  var password = document.getElementById('pwd');
  var errorPw = errorMessage[1];

  email.addEventListener('blur',function(){
    if (validateEmail(email.value) === false){
      errorMail.style.visibility = 'visible';
      email.classList = 'invalid-input';
    }
  });

  email.addEventListener('focus', function(){
    errorMail.style.visibility = 'hidden';
    email.classList -= 'invalid-input';
  });

  password.addEventListener('blur', function(){
    if (validateNumbersAndLetters(password.value) == false){
      errorPw.style.visibility = 'visible';
      password.classList = 'invalid-input';
    }
  });

  password.addEventListener('focus', function(){
    errorPw.style.visibility = 'hidden';
    password.classList -= 'invalid-input';
  })

} 