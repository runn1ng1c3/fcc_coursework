function rot13(str) {
  const puncRegex = /[^!?.\s]/;

  str = str
    .split("")
    .map((i) => {
      if (puncRegex.test(i)) {
        if (i.charCodeAt() >= 78) {
          return i.charCodeAt() - 13;
        } else {
          return i.charCodeAt() + 13;
        }
      } else {
        return i;
      }
    })
    .map((i) => {
      if (puncRegex.test(i)) {
        return String.fromCharCode(i);
      } else {
        return i;
      }
    })
    .join("");
  console.log(str);
  return str;
}

//test data
const testData = [
  "SERR PBQR PNZC",
  "SERR CVMMN!",
  "SERR YBIR?",
  "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.",
];

testData.forEach((i) => rot13(i));
