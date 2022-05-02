var nameMessage = '';
var lastNameMessage = '';
var docNumberMessage = '';
var dateMessage = '';
var phoneMessage = '';
var directionMessage = '';
var locationMessage = '';
var postalCodeMessage = '';
var signUpEmailMessage = '';
var signUpPasswordMessage = '';
var confirmPasswordMessage = '';

function validateJustLetters(string) {
  var notANumber = false;
  for (var i = 0; i < string.length; i++) {
    var nameElement = string[i];
    if (isNaN(nameElement)) {
      notANumber = true;
    }
  }
  return notANumber;
};

function validateJustNumbers(string) {
  var isNumber = false;
  for (var i = 0; i < string.length; i++) {
    var docElement = string[i];
    if (!isNaN(docElement)) {
      isNumber = true;
    }
  }
  return isNumber;
};

function validateStringLength(string, number) {
  var correctLength = false;
  if (string.length > number) {
    correctLength = true;
  }
  return correctLength;
};

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
};

function countLetters(string) {
  var letters = 0;
  for (var i = 0; i < string.length; i++) {
    var element = string[i];
    if (isNaN(element)) {
      letters++;
    }
  }
  return letters;
};

function validateSignUpEmail(input) {
  var regExEmail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
  return regExEmail.test(input);
};

// function validateDate(input) {
//   var actualDay = new Date();
//   var inputDate = new Date(input);
//   return inputDate <= actualDay;
// }

function validateDate(string){
  var dateIsValid = false;
  if (string.length == 10 && string[2] == '/' && string[5] == '/') {
      var todayDate = new Date();
      var birthdayDate = new Date(string.substring(6), string.substring(3, 5) - 1, string.substring(0, 2));
      dateIsValid = todayDate > birthdayDate;
    }
  return dateIsValid;
}

window.onload = function(){
  var nameError = document.getElementById('name-error');
  var name = document.getElementById('name');
  var lastName = document.getElementById('last-name');
  var lastNameError = document.getElementById('lastname-error');
  var docNumber = document.getElementById('document');
  var docError = document.getElementById('document-error');
  var date = document.getElementById('date');
  var dateError = document.getElementById('date-error');
  var phone = document.getElementById('phone');
  var phoneError = document.getElementById('phone-error');
  var direction = document.getElementById('direction');
  var directionError = document.getElementById('direction-error');
  var location = document.getElementById('location');
  var locationError = document.getElementById('location-error');
  var postalCode = document.getElementById('postal-code');
  var postalCodeError = document.getElementById('postalcode-error');
  var signUpEmail = document.getElementById('signup-email');
  var signUpEmailError = document.getElementById('signup-email-error');
  var signUpPassword = document.getElementById('pw');
  var signUpPasswordError = document.getElementById('pw-error');
  var confirmPassword = document.getElementById('confirm-pw');
  var confirmPasswordError = document.getElementById('confirm-pw-error');
  var signUpButton = document.getElementById('signup-button');
  var signUpAlert;
 
  function showNameErrors() {
    if (!validateJustLetters(name.value) || !validateStringLength (name.value, 3) || validateJustNumbers(name.value)) {
      nameError.style.visibility = 'visible';
      name.classList = 'invalid-input';
      nameMessage = nameError.textContent;
    } else {
      nameMessage = name.value;
    } 
  }

  function hideNameErrors() {
    nameError.style.visibility = 'hidden';
    name.classList -= 'invalid-input';
  }

  function showLastNameErrors() {
    if (!validateJustLetters(lastName.value) || !validateStringLength (lastName.value, 3) ||
    validateJustNumbers(lastName.value)) {
      lastNameError.style.visibility = 'visible';
      lastName.classList = 'invalid-input';
      lastNameMessage = lastNameError.textContent;
    } else {
      lastNameMessage = lastName.value;
    }
  }
  
  function hideLastNameErrors() {
    lastNameError.style.visibility = 'hidden';
    lastName.classList -= 'invalid-input';
  }

  function showDocErrors() {
    if (!validateJustNumbers(docNumber.value) || !validateStringLength(docNumber.value, 7) ||
     validateJustLetters(docNumber.value)) {
      docError.style.visibility = 'visible';
      docNumber.classList = 'invalid-input';
      docNumberMessage = docError.textContent;
    } else {
      docNumberMessage = docNumber.value;
    }
  }

  function hideDocErrors() {
    docError.style.visibility = 'hidden';
    docNumber.classList -= 'invalid-input';
  }

  function showDateErrors() {
    if (!validateDate(date.value)) {
      dateError.style.visibility = 'visible';
      date.classList = 'invalid-input';
      dateMessage = dateError.textContent;
    } else {
      dateMessage = date.value;
    }
  }

  function hideDateErrors() {
    dateError.style.visibility = 'hidden';
    date.classList -= 'invalid-input';
  }

  function showPhoneErrors() {
    if (!validateJustNumbers(phone.value) || validateJustLetters(phone.value) || phone.value.length != 10) {
      phoneError.style.visibility = 'visible';
      phone.classList = 'invalid-input';
      phoneMessage = phoneError.textContent;
    } else {
      phoneMessage = phone.value;
    } 
  }

  function hidePhoneErrors() {
    phoneError.style.visibility = 'hidden';
    phone.classList -= 'invalid-input';
  }

  function showDirectionErrors() {
    if (!validateTextNumberAndSpaces(direction.value) || !validateStringLength (direction.value, 4)) {
      directionError.style.visibility = 'visible';
      direction.classList = 'invalid-input';
      directionMessage = directionError.textContent;
    } else {
      directionMessage = direction.value;
    }
  }

  function hideDirectionErrors() {
    directionError.style.visibility = 'hidden';
    direction.classList -= 'invalid-input';
  }

  function showLocationErrors() {
    if (!validateJustLetters(location.value) || !validateJustNumbers(location.value) ||
     !(countLetters(location.value) > 3)) {
      locationError.style.visibility = 'visible';
      location.classList = 'invalid-input';
      locationMessage = locationError.textContent;
    } else {
      locationMessage = location.value;
    }
  }

  function hideLocationErrors() {
    locationError.style.visibility = 'hidden';
    location.classList -= 'invalid-input';
  }

  function showPostalCodeErrors() {
    if (!validateJustNumbers(postalCode.value) || validateJustLetters(postalCode.value) || postalCode.value.length < 4 || 
    postalCode.value.length > 5) {
      postalCodeError.style.visibility = 'visible';
      postalCode.classList = 'invalid-input';
      postalCodeMessage = postalCodeError.textContent;
    } else {
      postalCodeMessage = postalCode.value;
    }
  }

  function hidePostalCodeErrors() {
    postalCodeError.style.visibility = 'hidden';
    postalCode.classList -= 'invalid-input';
  }

  function showSignUpEmailErrors() {
    if(!validateSignUpEmail(signUpEmail.value)){
      signUpEmailError.style.visibility = 'visible';
      signUpEmail.classList = 'invalid-input';
      signUpEmailMessage = signUpEmailError.textContent;
    } else {
      signUpEmailMessage = signUpEmail.value;
    }
  }

  function hideSignUpEmailErrors() {
    signUpEmailError.style.visibility = 'hidden';
    signUpEmail.classList -= 'invalid-input';
  }

  function showSignUpPasswordErrors() {
    if (!validateJustLetters(signUpPassword.value) || !validateJustNumbers(signUpPassword.value) || 
    !validateStringLength(signUpPassword.value, 7)) {
      signUpPasswordError.style.visibility = 'visible';
      signUpPassword.classList = 'invalid-input';
      signUpPasswordMessage = signUpPasswordError.textContent;
    } else {
      signUpPasswordMessage = signUpPassword.value;
    }
  }

  function hideSignUpPasswordErrors () {
    signUpPasswordError.style.visibility = 'hidden';
    signUpPassword.classList -= 'invalid-input';
  }

  function showConfirmPasswordErrors() {
    if (!validateJustLetters(confirmPassword.value) || !validateJustNumbers(confirmPassword.value) || 
    !validateStringLength(confirmPassword.value, 7)) {
      confirmPasswordError.style.visibility = 'visible';
      confirmPassword.classList = 'invalid-input';
      confirmPasswordMessage = confirmPasswordError.textContent;
    } else {
      confirmPasswordMessage = confirmPassword.value;
    }
  }

  function hideConfirmPasswordErrors() {
    confirmPasswordError.style.visibility = 'hidden';
    confirmPassword.classList -= 'invalid-input';
  }

  function showValidationMessages(event) {
    event.preventDefault();
    signUpAlert = 'Name: ' + nameMessage + '\nLast Name: ' + lastNameMessage + '\nDocument: ' + docNumberMessage + 
    '\nDate: ' + dateMessage + '\nPhone: ' + phoneMessage + '\nDirection: ' + directionMessage + '\nLocation: ' +
    locationMessage + '\nPostal Code: ' + postalCodeMessage + '\nEmail: ' + signUpEmailMessage + '\nPassword: ' +
    signUpPasswordMessage + '\nRepeat Password: ' + confirmPasswordMessage;
    submitRequest();
  }

  function validateAllInputs(){
    //no estoy segura de si esto conviene hacerlo con un if o simplemente retornar lo que hay entre ().
    if(nameMessage == name.value && lastNameMessage == lastName.value && docNumberMessage == docNumber.value &&
    dateMessage == date.value && phoneMessage == phone.value && directionMessage == direction.value &&
    locationMessage == location.value && postalCodeMessage == postalCode.value && signUpEmailMessage ==
    signUpEmail.value && signUpPasswordMessage == signUpPassword.value && confirmPasswordMessage ==
    confirmPassword.value) {
      return true;
    }
  }

  function saveCredentials(){
    localStorage.setItem('name', name.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('dni', docNumber.value);
    localStorage.setItem('dob', date.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('adress', direction.value);
    localStorage.setItem('city', location.value);
    localStorage.setItem('zip', postalCode.value);
    localStorage.setItem('email', signUpEmail.value);
    localStorage.setItem('password', signUpPassword.value);
    localStorage.setItem('confirmPassword', confirmPassword.value);
  }

  function submitRequest(){
    if(validateAllInputs){
      fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?' +
        'name=' + name.value +
        '&lastName=' + lastName.value +
        '&dni=' + docNumber.value +
        '&dob=' + date.value +
        '&phone=' + phone.value +
        '&address=' + direction.value +
        '&city=' + location.value +
        '&zip=' + postalCode.value +
        '&email=' + signUpEmail.value +
        '&password=' + signUpPassword.value +
        '&confirmPassword =' + confirmPassword.value)
        .then(function(response){
          return response.json();
        })
        .then (function(data){
          if(data.success == true){
            var validatedAlert = data.msg + '\n' + signUpAlert;
            alert(validatedAlert);
            saveCredentials();
          } else{
            alert('Request rejected \n' + signUpAlert);
          }
        })
    //     .catch (function(error){
    //       alert(error.msg);
    //     })
    // } else {
    //   alert('Request rejected \n' + signUpAlert)
    // }
      }
    }

  name.addEventListener('blur', showNameErrors);
  name.addEventListener('focus', hideNameErrors);
  lastName.addEventListener('blur', showLastNameErrors);
  lastName.addEventListener('focus', hideLastNameErrors);
  docNumber.addEventListener('blur', showDocErrors);
  docNumber.addEventListener('focus', hideDocErrors);
  date.addEventListener('blur', showDateErrors);
  date.addEventListener('focus', hideDateErrors);
  phone.addEventListener('blur', showPhoneErrors);
  phone.addEventListener('focus', hidePhoneErrors);
  direction.addEventListener('blur', showDirectionErrors);
  direction.addEventListener('focus', hideDirectionErrors);
  location.addEventListener('blur', showLocationErrors);
  location.addEventListener('focus', hideLocationErrors);
  postalCode.addEventListener('blur', showPostalCodeErrors);
  postalCode.addEventListener('focus', hidePostalCodeErrors);
  signUpEmail.addEventListener('blur', showSignUpEmailErrors);
  signUpEmail.addEventListener('focus', hideSignUpEmailErrors);
  signUpPassword.addEventListener('blur', showSignUpPasswordErrors);
  signUpPassword.addEventListener('focus', hideSignUpPasswordErrors);
  confirmPassword.addEventListener('blur', showConfirmPasswordErrors);
  confirmPassword.addEventListener('focus', hideConfirmPasswordErrors);
  signUpButton.addEventListener('click', showValidationMessages);
}