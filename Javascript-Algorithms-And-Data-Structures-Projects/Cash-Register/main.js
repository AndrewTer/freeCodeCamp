function checkCashRegister(price, cash, cid) 
{
  let change = cash - price;
  let reg = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  let changeArr = [];
  let result = { status: "", change: [] }
  
  let totalCash = cid.reduce(function (sum, value) {
    return sum + value[1];
  }, 0);

  totalCash = Math.round(totalCash * 100) / 100; 
  
  if (totalCash === change) 
  {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }
  
  for (let i = cid.length - 1; i >= 0; i--) 
  {
    let value = 0;
    
    while (cid[i][1] > 0 && change >= reg[i]) 
    {
      change -= reg[i];
      change = Math.round(change * 100) / 100;
      cid[i][1] -= reg[i];
      value += reg[i];
    }

    if (value > 0) 
    {
      changeArr.push([cid[i][0], value]);
    }
  }

  let profit = changeArr.reduce(function (sum, value) {
    return sum + value[1];
  }, 0);

  profit = Math.round(profit * 100) / 100;
  
  if (profit < change) 
  {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  
  result.status = "OPEN";
  result.change = changeArr;
  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
