let romanNumeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],
                        ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                        ["","M","MM","MMM"]];
                        
document.getElementById("convert-btn").onclick = function() {
  let inputValue = document.getElementById("number").value;

  if (inputValue)
  {
    document.getElementById("output").innerHTML = (inputValue > 0 ? (inputValue < 4000 ? convertToRoman(inputValue) : 'Please enter a number less than or equal to 3999') : 'Please enter a number greater than or equal to 1');
    document.getElementById("output").style.margin = '10px 0 0 0';
  }else
    document.getElementById("output").innerHTML = "Please enter a valid number";
};

function convertToRoman(num) {
    let result = "";
    let ranks = num.toString().split('').reverse();
    
    for (var i=0; i < ranks.length; i++)
      result = romanNumeralCodes[i][parseInt(ranks[i])] + result;

    return result; 
}
