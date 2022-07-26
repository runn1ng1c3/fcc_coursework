function palindrome(str) {
  console.log(str);
  str = str
    .replace(/[-\s_*,.():\\\/]/g, "")
    .toLowerCase()
    .split(/(?=\w)/);
  console.log(str);
  const newStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }
  console.log(str.join(""));
  console.log(newStr.join(""));
  if (newStr.join("") === str.join("")) return true;
  else return false;
}

//test data
const testData = [
  "eye",
  "_eye",
  "race car",
  "not a palindrome",
  "A man, a plan, a canal. Panama",
  "never odd or even",
  "nope",
  "almostomla",
  "My age is 0, 0 si ega ym.",
  "1 eye for of 1 eye.",
  "0_0 (: /- :) 0-0",
  "five|_/|four",
];

testData.forEach((i) => palindrome(i));
