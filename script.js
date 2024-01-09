// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var characterCount = prompt("How many characters do you need the password to be?");
  var length = characterCount;

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please select a number between 8 and 128 for the password length.");
    return;
  }
// confirms if you want to include the below character types in your password
  var includeSpecialChars = confirm("Do you want to include special characters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
// checks if the user has selected at least one character type - informs user if they have not
  if (!includeSpecialChars && !includeNumbers && !includeLowercase && !includeUppercase) {
    alert("You must select at least one character type for the password.");
    return;
  }
// stores the users choice using boolean
  var passwordOptions = {
    length: length,
    includeSpecialChars: includeSpecialChars,
    includeNumbers: includeNumbers,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase
  };

  return passwordOptions;
}
// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return "";
  }

  var availableCharacters = [];

  if (options.includeSpecialChars) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }
  if (options.includeNumbers) {
    availableCharacters = availableCharacters.concat(numericCharacters);
  }
  if (options.includeLowercase) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUppercase) {
    availableCharacters = availableCharacters.concat(upperCasedCharacters);
  }

  var generatedPassword = "";

  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(availableCharacters);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);