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
    originalTxt.split("").reverse().join("")
  );

  return originalTxt === reversedText;
};

checkButton.addEventListener("click", () => {
  let enteredText = inputText.value;

  let isPalindrome = palindromeChecker(enteredText);

  // console.log("MiCasa")
  // console.log(enteredText)
  console.log(isPalindrome);

  if (isPalindrome === true) {
    result.innerHTML = `<span>${enteredText} is a palindrome</span>`;
  } else {
    result.innerHTML = `<span>${enteredText} is not a palindrome</span>`;
  }
});
