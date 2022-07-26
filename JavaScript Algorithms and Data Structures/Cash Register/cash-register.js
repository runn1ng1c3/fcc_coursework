function checkCashRegister(price, cash, cid) {
  const output = {
    status: "OPEN",
    change: [],
  };

  //array to track changes in cash register
  const track = Array(9).fill(0);
  const val = [0.01, 0.05, 0.1, 0.25, 1.0, 5.0, 10.0, 20.0, 100.0];
  let total = cid.reduce((total, i) => total + i[1], 0).toFixed(2);
  let change = cash - price;

  //if the change is equal to the total of money in cash register
  if (change == total) {
    return {
      status: "CLOSED",
      change: cid,
    };
  }

  //operation to give the change from the cash register
  while (change != 0) {
    let i = cid.length;
    while (i >= 0) {
      if (change >= val[i] && cid[i][1] != 0) {
        change -= val[i];
        change = change.toFixed(2);
        cid[i][1] -= val[i];
        track[i] += val[i];
      } else {
        i--;
      }
    }
    break;
  }

  //money in cash register is not enough to give change
  if (change != 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  }

  //translate track arr to make the change arr of obj

  for (let i = 0; i < track.length; i++) {
    if (track[i] != 0) {
      output.change.push([cid[i][0], track[i]]);
    }
  }

  //sort the change due in coins and bills, sorted in highest to lowest order
  output.change.sort(function (a, b) {
    return b[1] - a[1];
  });

  return output;
}

//test data
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
