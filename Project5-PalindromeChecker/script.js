const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");

//Remove all non-alphanumeric characters

const removeNonAlphanumerics = (text) => {
  return text.replace(/[\W_]/g, "").toLowerCase();
};

//Build the palindrome checker function

const palindromeChecker = (inputTxt) => {
  let originalTxt = removeNonAlphanumerics(inputTxt);

  let reversedText = removeNonAlphanumerics(
    originalTxt.split("").reverse().join("")
  );

  return originalTxt === reversedText;
};

checkButton.addEventListener("click", () => {
  let enteredText = inputText.value;

  let isPalindrome = palindromeChecker(enteredText);

  console.log(isPalindrome);

  if (isPalindrome === true) {
    result.innerHTML = `<div><span>${enteredText}</span> is a palindrome</div>`;
  } else {
    result.innerHTML = `<div><span>${enteredText}</span> is not a palindrome</div>`;
  }

  if (enteredText.length === 0) {
    alert("Please input a value");
    result.innerText = "";
  }
});
