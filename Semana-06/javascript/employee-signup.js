
function validateJustLetters (string){
  var notANumber = false;
  for (var i = 0; i < string.length; i++){
    var nameElement = string[i];
    if(isNaN(nameElement)){
      notANumber = true;
    }
  }
  return notANumber;
}

function validateJustNumbers (string){
  var isNumber = false;
  for (var i = 0; i < string.length; i++){
    var docElement = string[i];
    if(!isNaN(docElement)){
      isNumber = true;
    }
  }
  return isNumber;
}

function validateStringLength (string, number){
  var correctLength = false;
  if(string.length > number){
    correctLength = true;
  }
  return correctLength;
}

function validateTextNumberAndSpaces(string) {
  var validation = false;
  var firstNumber;
  if (validateJustNumbers(string) && validateJustLetters(string)) {
    if (string.indexOf(' ') != -1) {
      firstNumber = string.indexOf(' ');
      if (!isNaN(string[firstNumber + 1])) {
        validation = true;
      }
    }
  }
  return validation;
}

function countLetters(string) {
  var letters = 0;
  for (var i = 0; i < string.length; i++) {
    var element = string[i];
    if (isNaN(element)) {
      letters++;
    }
  }
  return letters;
}

function validateSignUpEmail(input){
  var regExEmail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
  return regExEmail.test(input);
}

window.onload = function(){

  var errorMessageSignUp = document.getElementsByClassName('error-msg');
  var nameError = errorMessageSignUp[0];
  var name = document.getElementById('name');
 
  function showNameErrors(e){
    if(!validateJustLetters(name.value) || !validateStringLength (name.value, 3) || validateJustNumbers(name.value)){
      nameError.style.visibility = 'visible';
      name.classList = 'invalid-input';
    } 
  }
  name.addEventListener('blur', showNameErrors);

  function hideNameErrors(e){
    nameError.style.visibility = 'hidden';
    name.classList -= 'invalid-input';
  }
  name.addEventListener('focus', hideNameErrors);

  var lastName = document.getElementById('last-name');
  var lastNameError = errorMessageSignUp[1];

  function showLastNameErrors(e){
    if(!validateJustLetters(lastName.value) || !validateStringLength (lastName.value, 3) ||
    validateJustNumbers(lastName.value)){
      lastNameError.style.visibility = 'visible';
      lastName.classList = 'invalid-input';
    }
  }
  lastName.addEventListener('blur', showLastNameErrors);

  function hideLastNameErrors(e){
    lastNameError.style.visibility = 'hidden';
    lastName.classList -= 'invalid-input';
  }
  lastName.addEventListener('focus', hideLastNameErrors);

  var docNumber = document.getElementById('document');
  var docError = errorMessageSignUp[2];


  function showDocErrors(e){
    if(!validateJustNumbers(docNumber.value) || !validateStringLength(docNumber.value, 7) ||
     validateJustLetters(docNumber.value)){
      docError.style.visibility = 'visible';
      docNumber.classList = 'invalid-input';
    } 
  }
  docNumber.addEventListener('blur', showDocErrors);

  function hideDocErrors(e){
    docError.style.visibility = 'hidden';
    docNumber.classList -= 'invalid-input';
  }
  docNumber.addEventListener('focus', hideDocErrors);

  var phone = document.getElementById('phone');
  var phoneError = errorMessageSignUp[4];

  function showPhoneErrors(e){
    if(!validateJustNumbers(phone.value) || validateJustLetters(phone.value) || phone.value.length != 10){
      phoneError.style.visibility = 'visible';
      phone.classList = 'invalid-input';
    } 
  }
  phone.addEventListener('blur', showPhoneErrors);

  function hidePhoneErrors(e){
    phoneError.style.visibility = 'hidden';
    phone.classList -= 'invalid-input';
  }
  phone.addEventListener('focus', hidePhoneErrors);

  var direction = document.getElementById('direction');
  var directionError = errorMessageSignUp[5];

  function showDirectionErrors(e){
    if(!validateTextNumberAndSpaces(direction.value) || !validateStringLength (direction.value, 4)){
      directionError.style.visibility = 'visible';
      direction.classList = 'invalid-input';
    }
  }
  direction.addEventListener('blur', showDirectionErrors);

  function hideDirectionErrors(e){
    directionError.style.visibility = 'hidden';
    direction.classList -= 'invalid-input';
  }
  direction.addEventListener('focus', hideDirectionErrors);

  var location = document.getElementById('location');
  var locationError = errorMessageSignUp[6];

  function showLocationErrors(e){
    if(!validateJustLetters(location.value) || !validateJustNumbers(location.value) || !(countLetters(location.value) > 3)){
      locationError.style.visibility = 'visible';
      location.classList = 'invalid-input';
    }
  }
  location.addEventListener('blur', showLocationErrors);

  function hideLocationErrors(e){
    locationError.style.visibility = 'hidden';
    location.classList -= 'invalid-input';
  }
  location.addEventListener('focus', hideLocationErrors);

  var postalCode = document.getElementById('postal-code');
  var postalCodeError = errorMessageSignUp[7];

  function showPostalCodeErrors(e){
    if(!validateJustNumbers(postalCode.value) || validateJustLetters(postalCode.value) || postalCode.value.length < 4 || 
    postalCode.value.length > 5){
      postalCodeError.style.visibility = 'visible';
      postalCode.classList = 'invalid-input';
    }
  }
  postalCode.addEventListener('blur', showPostalCodeErrors);

  function hidePostalCodeErrors(e){
    postalCodeError.style.visibility = 'hidden';
    postalCode.classList -= 'invalid-input';
  }
  postalCode.addEventListener('focus', hidePostalCodeErrors);

  var signUpEmail = document.getElementById('signup-email')
  var signUpEmailError = errorMessageSignUp[8];

  function showSignUpEmailErrors(e){
    if(!validateSignUpEmail(signUpEmail.value)){
      signUpEmailError.style.visibility = 'visible';
      signUpEmail.classList = 'invalid-input';
    }
  }
  signUpEmail.addEventListener('blur', showSignUpEmailErrors);

  function hideSignUpEmailErrors(e){
    signUpEmailError.style.visibility = 'hidden';
    signUpEmail.classList -= 'invalid-input';
  }
  signUpEmail.addEventListener('focus', hideSignUpEmailErrors);

  var signUpPassword = document.getElementById('pw');
  var signUpPasswordError = errorMessageSignUp[9];

  function showSignUpPasswordErrors(e){
    if(!validateJustLetters(signUpPassword.value) || !validateJustNumbers(signUpPassword.value) || 
    !validateStringLength(signUpPassword.value, 7)){
      signUpPasswordError.style.visibility = 'visible';
      signUpPassword.classList = 'invalid-input';
    }
  }
  signUpPassword.addEventListener('blur', showSignUpPasswordErrors);

  function hideSignUpPasswordErrors(e){
    signUpPasswordError.style.visibility = 'hidden';
    signUpPassword.classList -= 'invalid-input';
  }
  signUpPassword.addEventListener('focus', hideSignUpPasswordErrors);

  var confirmPassword = document.getElementById('confirm-pw');
  var confirmPasswordError = errorMessageSignUp[10];

  function showConfirmPasswordErrors(e){
    if(!validateJustLetters(confirmPassword.value) || !validateJustNumbers(confirmPassword.value) || 
    !validateStringLength(confirmPassword.value, 7)){
      confirmPasswordError.style.visibility = 'visible';
      confirmPassword.classList = 'invalid-input';
    }
  }
  confirmPassword.addEventListener('blur', showConfirmPasswordErrors);

  function hideConfirmPasswordErrors(e){
    confirmPasswordError.style.visibility = 'hidden';
    confirmPassword.classList -= 'invalid-input';
  }
  confirmPassword.addEventListener('focus', hideConfirmPasswordErrors);
  
}