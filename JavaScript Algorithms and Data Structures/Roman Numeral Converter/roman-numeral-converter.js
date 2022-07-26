function convertToRoman(num) {
  num = String(num)
    .split("")
    .map((item) => Number(item));
  let roman = "";
  const addOne = (n) => {
    for (let i = 0; i < n; i++) {
      roman += "I";
    }
  };
  const addTen = (n) => {
    for (let i = 0; i < n; i++) {
      roman += "X";
    }
  };
  const addHundred = (n) => {
    for (let i = 0; i < n; i++) {
      roman += "C";
    }
  };
  const addThousand = (n) => {
    for (let i = 0; i < n; i++) {
      roman += "M";
    }
  };

  switch (num.length) {
    case 4:
      if (num[num.length - 4] <= 3) {
        addThousand(num[num.length - 4]);
      }
    case 3:
      if (num[num.length - 3] <= 3) {
        addHundred(num[num.length - 3]);
      } else if (num[num.length - 3] == 4) {
        roman += "CD";
      } else if (num[num.length - 3] >= 5 && num[num.length - 3] < 9) {
        roman += "D";
        if (num[num.length - 3] > 5) {
          addHundred(num[num.length - 3] - 5);
        }
      } else if (num[num.length - 3] == 9) {
        roman += "CM";
      }

    case 2:
      if (num[num.length - 2] <= 3) {
        addTen(num[num.length - 2]);
      } else if (num[num.length - 2] == 4) {
        roman += "XL";
      } else if (num[num.length - 2] >= 5 && num[num.length - 2] < 9) {
        roman += "L";
        if (num[num.length - 2] > 5) {
          addTen(num[num.length - 2] - 5);
        }
      } else if (num[num.length - 2] == 9) {
        roman += "XC";
      }

    case 1:
      if (num[num.length - 1] <= 3) {
        addOne(num[num.length - 1]);
      } else if (num[num.length - 1] == 4) {
        roman += "IV";
      } else if (num[num.length - 1] >= 5 && num[num.length - 1] < 9) {
        roman += "V";
        if (num[num.length - 1] > 5) {
          addOne(num[num.length - 1] - 5);
        }
      } else if (num[num.length - 1] == 9) {
        roman += "IX";
      }
  }
  console.log(roman);
  return roman;
}

//test data
const testData = [
  2, 3, 4, 5, 9, 12, 16, 29, 44, 45, 68, 83, 97, 99, 400, 500, 501, 649, 798,
  891, 1000, 1004, 1006, 1023, 2014, 3999,
];
testData.forEach((i) => convertToRoman(i));
