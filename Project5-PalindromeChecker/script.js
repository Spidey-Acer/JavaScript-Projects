const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");

//Remove all non-alphanumeric characters

const removeNonAlphanumerics = (text) => {
  return text.replace(/[\W_]/g, "").toLowerCase();
};

console.log(removeNonAlphanumerics("ii$ffff^cdf345GGGG"));

//Build the palindrome checker function

const palindromeChecker = (inputTxt) => {
  // let inputTxt = inputText.value;

  let originalTxt = removeNonAlphanumerics(inputTxt);

  let reversedText = removeNonAlphanumerics(
    inputTxt.split("").reverse().join("")
  );

  if (originalTxt === reversedText) {
    return `${inputTxt} is a palindrome`;
  } else {
    return `${inputTxt} is not a palindrome`;
  }

  return reversedText;
};

console.log(palindromeChecker("ii$ffff^cdf345GGGG"));

console.log(palindromeChecker("pep"));
