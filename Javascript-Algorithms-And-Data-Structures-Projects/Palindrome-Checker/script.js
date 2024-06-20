document.getElementById("check-btn").onclick = function() {
  let inputValue = document.getElementById("text-input").value;

  if (inputValue)
  {
    document.getElementById("result").innerHTML = inputValue + (palindrome(inputValue) ? ' is a palindrome' : ' is not a palindrome');
    document.getElementById("result").style.margin = '10px 0 0 0';
  }else
    alert("Please input a value");
};

function palindrome(str) 
{
  let lower_case_string = str.toLowerCase();
  lower_case_string = lower_case_string.replace(/[^a-z0-9]/g, '');
  let reverse_lower_case_string = lower_case_string.split('').reverse().join('');
  return lower_case_string.includes(reverse_lower_case_string) ? true : false;
}
